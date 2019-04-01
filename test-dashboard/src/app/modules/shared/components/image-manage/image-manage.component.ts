import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ImageUploadComponent} from '../image-upload/image-upload.component';

@Component({
  selector: 'yot-image-manage',
  templateUrl: './image-manage.component.html',
  styleUrls: ['./image-manage.component.scss']
})
export class ImageManageComponent {
  @Input() diagramFC: FormControl;

  constructor(private dialog: MatDialog) { }

  changeImage() {
    this.dialog.open(ImageUploadComponent, {width: '300px', height: '300px'}).afterClosed().subscribe(url => {
      if (url) {
        this.diagramFC.setValue(url);
      }
    });
  }

  removeImage() {
    this.diagramFC.setValue(null);
  }
}
