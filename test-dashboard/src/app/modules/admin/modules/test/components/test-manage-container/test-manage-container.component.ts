import {Component, Inject, OnInit} from '@angular/core';
import {Test} from '../../../../../core/models/test.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'yot-test-manage-container',
  template: `
    <yot-test-manage [test]="test"></yot-test-manage>
  `
})

export class TestManageContainerComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<TestManageContainerComponent>, @Inject(MAT_DIALOG_DATA) public test: Test) {
  }

  ngOnInit() {
  }
}
