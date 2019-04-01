import { Component, OnInit } from '@angular/core';
import { DemoClassForm } from '../generate/generate.component';
import { CoreService } from 'src/app/services/core.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  controller = environment.APIURL;
  demo = new DemoClassForm();
  constructor(private http: HttpClient, public core: CoreService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  verifyOTP(a: number) {
    if (a <= 1000 || a >= 999999) {
      this.toastr.error('Invalid OTP');
    } else {
      this.http.get(this.controller + 'api/DemoClass/MarkAttendance?otp=' + a)
        .subscribe((b: any) => {
          if (b.message) {
            this.toastr.info(b.message);
          } else if (b.data) {
            this.toastr.info(b.data.name);
          }
        },
          err => {
            console.log(err);
            this.toastr.error(err.error || err.message || err.body || err.statusText , 'Error');
          });
    }
  }

}
