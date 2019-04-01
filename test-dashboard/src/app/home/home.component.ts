import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {YotestApiService} from '../modules/core/services/yotest-api.service';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {UnsubscribeComponent} from '../modules/user/containers/unsubscribe/unsubscribe.component';
import {API_KEY} from '../utils/constants';

@Component({
  selector: 'yot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent extends UnsubscribeComponent implements OnInit {
  url: FormControl;
  error: string = null;

  constructor(private router: Router, private yotService: YotestApiService) {
    super();
  }

  ngOnInit() {
    this.url = new FormControl(null, [Validators.required]);
    this.manageError();
  }

  manageError() {
    this.url.valueChanges.pipe(debounceTime(300), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.error = null;
    });
  }

  onSubmit() {
    const redirectValue = this.url.value;
    this.yotService.checkTestExists(redirectValue).subscribe(() => {
      this.router.navigate(['/test', redirectValue]);
    }, (error) => {
      this.error = error.error.message;
    });
  }
}
