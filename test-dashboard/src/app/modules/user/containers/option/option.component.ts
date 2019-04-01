import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Option} from '../../../core/models/option.model';

@Component({
  selector: 'yot-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() optionData: any[];
  @Input() selectedOptionId: number;
  @Input() showSpinner: boolean;
  options = [];
  @Output() option = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    this.options = this.optionData;
    console.log(this.options);
  }
  optionSelect(args) {
    console.log(Object.keys(args.value));
    this.option.emit(Object.keys(args.value)['0']);
  }
  check(op) {
   return parseInt(Object.keys(op)[0], 10) === this.selectedOptionId;
  }
}
