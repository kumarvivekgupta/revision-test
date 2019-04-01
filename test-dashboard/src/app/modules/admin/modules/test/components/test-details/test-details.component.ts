import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Test} from '../../../../../core/models/test.model';
import * as moment from 'moment';

@Component({
  selector: 'yot-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent implements OnInit {
  @Input() test: Test;
  @Output() testCreated = new EventEmitter<Test>();
  controls = {
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    instructions: new FormArray([
      new FormControl(null, [Validators.required])
    ])
  };
  form = new FormGroup(this.controls);

  ngOnInit(): void {
    if (this.test) {
      this.form.setValue({
        title: this.test.title,
        description: this.test.description || '',
        instructions: this.test.instructions || []
      });
    }
  }

  onSubmit() {
    this.testCreated.emit({
      ...this.form.value,
      question_set: [],
      // TODO change these static values after the UI is ready
      duration: 120,
      date: moment().format('yyyy-dd-mm')
    });
  }

  addIns() {
    if (this.controls.instructions.controls[this.controls.instructions.length - 1].value) {
      this.controls.instructions.push(new FormControl(null));
      this.controls.instructions.controls[0].setValidators(Validators.required);
    }
  }

  removeIns(i) {
    if (this.controls.instructions.controls.length > 1) {
      this.controls.instructions.removeAt(i);
      this.controls.instructions.controls[0].setValidators(Validators.required);
    }
  }
}
