import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {interval} from 'rxjs';
import {map, takeUntil, takeWhile} from 'rxjs/operators';
import {TIMER} from '../../../../utils/constants';

@Component({
  selector   : 'yot-counter',
  templateUrl: './counter.component.html',
  styleUrls  : ['./counter.component.scss']
})
export class CounterComponent implements OnInit,OnDestroy {
  // timeLeft stores the testTime in seconds
  @Input() timeLeft: number;
  @Output() timeEnd = new EventEmitter<boolean>();
  clearTimer = false;

  constructor() {
  }

  ngOnInit() {
    this.clearTimer = true;
    const timeString = localStorage.getItem(TIMER);
    if (timeString) {
      const time: { timeLeft: number, lastUpdatedOn: Date } = JSON.parse(timeString);
      this.timeLeft                                         = time.timeLeft - ((new Date().getTime() - new Date(time.lastUpdatedOn).getTime()) / 1000);
    }
    interval(1000).pipe(takeWhile(() => this.clearTimer), map(() => {
      this.timeLeft--;
      localStorage.setItem(TIMER, JSON.stringify({
        timeLeft     : this.timeLeft,
        lastUpdatedOn: new Date()
      }));
    })).subscribe(() => {
      if (this.timeLeft === 0) {
        this.timeEnd.emit(true);
      }
    });

  }

  getFormattedTime(secDuration: number) {
    let output       = '';
    const secPerMin  = 60;
    const secPerHour = 60 * secPerMin;

    const hours   = Math.floor(secDuration / secPerHour);
    const minutes = Math.floor((secDuration % secPerHour) / secPerMin);
    const seconds = Math.round(secDuration % secPerMin);
    hours < 10 ? output += '0' + hours : output += hours;
    output += ':';
    minutes < 10 ? output += '0' + minutes : output += minutes;
    output += ':';
    seconds < 10 ? output += '0' + seconds : output += seconds;
    return output;
  }
  ngOnDestroy(){
    this.clearTimer=false;
  }
}
