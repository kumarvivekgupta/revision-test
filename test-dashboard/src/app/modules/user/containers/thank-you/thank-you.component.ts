import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'yot-thank-you',
  template: `<div style="width: 100vw; height: 100vh; text-align: center">
    <h1>Thank You</h1>
  </div>`,
  styles: [``]
})
export class ThankYouComponent implements OnInit {
  ngOnInit(): void {
    localStorage.clear();
  }
}
