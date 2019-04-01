import {Component, Input} from '@angular/core';
import {FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'yot-option-manage',
  templateUrl: './option-manage.component.html',
  styleUrls: ['./option-manage.component.scss']
})
export class OptionManageComponent {
  @Input() optionsArray: FormArray;

  constructor() {}

  removeOption(i) {
    console.log(this.optionsArray);
    if (this.optionsArray.length > 1) {
      this.optionsArray.removeAt(i);
      this.optionsArray.controls[0].get('title').setValidators(Validators.required);
    }
  }
}
