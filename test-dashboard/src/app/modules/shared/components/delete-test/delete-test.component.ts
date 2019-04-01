import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector   : 'yot-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls  : ['./delete-test.component.scss']
})
export class DeleteTestComponent {
  constructor(private dialogRef: MatDialogRef<DeleteTestComponent>) {
  }

  delete(value: string) {
    this.dialogRef.close(value);
  }

}
