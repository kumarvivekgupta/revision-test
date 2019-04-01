import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {TestManageContainerComponent} from '../test-manage-container/test-manage-container.component';

@Component({
  selector: 'yot-admin-test-container',
  template: `
    <mat-toolbar class = "test-list-header">
      <mat-toolbar-row>
        <span>Tests</span>
        <span style = "flex: 1 1 auto"></span>
        <button mat-raised-button color = "primary" (click) = "openTestManageContainer()" matTooltip = "Add Test">Add Test</button>
      </mat-toolbar-row>
    </mat-toolbar>
    <div style="height: 500px">
    <router-outlet></router-outlet>
    </div>
  `
})
export class AdminTestContainerComponent {
  constructor(private dialog: MatDialog) {

  }

  openTestManageContainer() {
    this.dialog.open(TestManageContainerComponent, {
      width: '100%', height: '100%', maxWidth: '100vw', maxHeight: '100vh'
    });
  }
}
