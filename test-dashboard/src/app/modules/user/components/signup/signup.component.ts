import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {YotestApiService} from '../../../core/services/yotest-api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {UnsubscribeComponent} from '../../containers/unsubscribe/unsubscribe.component';

@Component({
  selector: 'yot-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends UnsubscribeComponent implements OnInit {

  signupForm: FormGroup;
  error: string = null;
  testId = '';

  constructor(private yotService: YotestApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit() {
    this.getTestId();
    this.initialiseForm();
    this.manageError();
  }

  getTestId() {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.testId = params.testCode;
    });
  }

  initialiseForm() {
    this.signupForm = new FormGroup({
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      test_id: new FormControl(this.testId, [Validators.required])
    });
  }

  manageError() {
    this.signupForm.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.error = null;
    });
  }

  onSubmit() {
    this.yotService.signUp(this.signupForm.value).subscribe((res) => {
      this.router.navigate(['instructions'], {relativeTo: this.activatedRoute});
    }, (error) => {
      // TODO some error occured while signing up
      this.error = error.error.message;
    });
  }

}
