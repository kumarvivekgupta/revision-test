import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../../../../core/models/question.model';

@Component({
  selector: 'yot-question-manage',
  templateUrl: './question-manage.component.html',
  styleUrls: ['./question-manage.component.scss']
})
export class QuestionManageComponent implements OnInit {
  @Input() question: Question;
  @Output() modifiedQuestion = new EventEmitter<Question>();
  @Output() closeAction = new EventEmitter();
  controls: any;
  form: FormGroup;

  constructor() {
  }

  ngOnInit() {
    if (this.question) {
      this.controls = {
        question: new FormControl(this.question.question, [Validators.required]),
        diagram: new FormControl(this.question.diagram)
      };


      if (this.question.options && this.question.options.length > 0) {
        this.controls = {
          ...this.controls,
          options: new FormArray(
            this.question.options.map(option => new FormGroup({
              title: new FormControl(option.option),
              diagram: new FormControl(option.diagram)
            }))
          ),
          correct_option: new FormControl(this.question.correct_option)
        };
      }
    } else {
      this.controls = {
        question: new FormControl(null),
        diagram: new FormControl(null),
        options: new FormArray([
          new FormGroup({
            title: new FormControl(null, [Validators.required]),
            diagram: new FormControl(null)
          })
        ]),
        correct_option: new FormControl(null)
      };
    }
    this.form = new FormGroup(this.controls);
    window.addEventListener('beforeunload', function (e) {
      const confirmationMessage = 'It looks like you have been editing something. '
        + 'If you leave before saving, your changes will be lost.';

      (e || window.event).returnValue = confirmationMessage;
      return confirmationMessage;
    });
  }

  addOption() {
    if (!this.controls.options) {
      this.controls.options = new FormArray([]);
    }
    this.controls.options.push(new FormGroup({
      title: new FormControl(null),
      diagram: new FormControl(null)
    }));
    this.controls.options.controls[0].get('title').setValidators(Validators.required);
  }

  emitQuestion() {
    let value = {
      ...this.form.value, options: this.form.value.options.filter(op => op.title).map((op, index) => {
        return {[index + 1]: op};
      })
    };
    if (this.question && this.question.id) {
      value = {...value, id: this.question.id};
    }
    this.modifiedQuestion.emit(value);
  }

  close() {
    this.closeAction.emit();
  }
}
