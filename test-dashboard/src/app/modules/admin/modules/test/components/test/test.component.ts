import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Test} from '../../../../../core/models/test.model';

@Component({
  selector    : 'yot-test', template: `
    <mat-card>
      <span>{{test.title}}</span>
      <div class = "hover test-hover test-actions-container">
        <div class = "test-actions">
          <button mat-icon-button>
            <mat-icon>remove_red_eye</mat-icon>
          </button>
          <button mat-icon-button>
            <mat-icon>assignment</mat-icon>
          </button>
        </div>
        <div class = "test-actions">
          <button mat-icon-button (click) = "onEditClick()">
            <mat-icon>edit</mat-icon>
          </button>
          <button (click) = "delete()" mat-icon-button>
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      </div>
    </mat-card>
  `, styleUrls: ['./test.component.scss']
})
export class TestComponent {
  @Input() test: Test;

  @Output() editClicked   = new EventEmitter<Test>();
  @Output() deleteClicked = new EventEmitter<Test>();

  onEditClick() {
    this.editClicked.emit(this.test);
  }

  delete() {
    this.deleteClicked.emit(this.test);
  }
}
