import {Component, Inject} from '@angular/core';
import {Question} from '../../../../../core/models/question.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'yot-question-container',
  template: `
    <yot-question-manage [question]="question" (modifiedQuestion)="saveQuestion($event)" (closeAction)="closeDialog()">
    </yot-question-manage>`
})
export class QuestionContainerComponent {
  constructor(private dialogRef: MatDialogRef<QuestionContainerComponent>, @Inject(MAT_DIALOG_DATA) public question: Question) {
  }

  saveQuestion(event: Question) {
    this.dialogRef.close(event);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
