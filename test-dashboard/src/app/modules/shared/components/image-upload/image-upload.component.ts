import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {YotestAdminApiService} from '../../../core/services/yotest-admin-api.service';
import {HttpEventType} from '@angular/common/http';

@Component({
  selector: 'yot-image-upload',
  template: `<div class="image-upload-container">
    <h1 class="image-upload__title">Select Logo</h1>
    <div mat-dialog-content>
      <img *ngIf="imageUrl" [src]="imageUrl | safeUrl" alt="Image">
      <input type="file" #imageFile name="image" accept="image/*" (change)="imageSelected($event)" hidden>
      <div class="image-upload__actions" *ngIf="!uploading">
      <button *ngIf="imageUrl" mat-raised-button (click)="uploadImage()">Use Image</button>
      <button mat-raised-button (click)="nativeInputFile.nativeElement.click()">{{imageUrl ? 'Reselect' : 'Select Image'}}</button>
      </div>
      <mat-progress-bar *ngIf="uploading" color="primary" [value]="percentUploaded" [bufferValue]="100"></mat-progress-bar>
    </div>
  </div>`,
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @ViewChild('imageFile') nativeInputFile: ElementRef;
  imageUrl = null;
  selectedFile: File = null;
  percentUploaded = 0;
  uploading = false;

  constructor(public dialogRef: MatDialogRef<ImageUploadComponent>, private service: YotestAdminApiService) {}

  ngOnInit(): void {}

  imageSelected(event) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (ev: any) => {
        this.imageUrl = ev.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadImage() {
    this.uploading = true;
    this.service.storeLogo(this.selectedFile).subscribe(ev => {
      this.percentUploaded = ev * 10;
      console.log(ev);
      // if (typeof ev === HttpEventType.Response) {
        this.dialogRef.close(ev.url);
      // }
    });
  }
}
