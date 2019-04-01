import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {YotestAdminApiService} from '../../../core/services/yotest-admin-api.service';

@Component({
  selector: 'yot-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private yotAdminService: YotestAdminApiService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const data = {email, password};
    this.yotAdminService.login(data).subscribe(res => {
      this.router.navigate(['../dashboard'], {
        relativeTo: this.activatedRoute
      });
    });
  }
}
