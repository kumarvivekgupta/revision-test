import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  controller = environment.APIURL;
  demo = new DemoClassForm();
  constructor(private http: HttpClient, public core: CoreService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  submit() {
    if (this.demo.name.length <= 2 || this.demo.name.length >= 25) {
      this.toastr.warning('Invalid Name');
    } else if (this.demo.phone.toString().length !== 10) {
      alert('Invalid Phone');
    } else {
      this.http.post(this.controller + 'api/DemoClass/Index', this.demo)
        .subscribe(() => {
          alert('OTP sent successfully.');
          this.demo = new DemoClassForm();
        },
          err => {
            console.log(err);
            this.toastr.error(err.error || err.message || err.body || err.statusText || '', 'Unexpected Error');
          });
    }
  }
  resendOTP() {
    if (this.demo.phone.toString().length !== 10) {
      alert('Invalid Phone');
    } else {
      this.http.post(this.controller + 'api/DemoClass/ResendOTP', this.demo)
        .subscribe(() => {
          alert('OTP sent successfully.');
          this.demo = new DemoClassForm();
        },
          err => {
            console.log(err);
            alert(err.error || err.message || err.body || err.statusText || 'Unexpected Error');
          });
    }
  }
}

export class DemoClassForm {
  public id: number;
  public created: Date;
  public expiry: Date;
  public name: string;
  public phone: number;
  public branchId: string;
  public courseId: string;
  public oTP: number;
  public retryOTP: number;
}

