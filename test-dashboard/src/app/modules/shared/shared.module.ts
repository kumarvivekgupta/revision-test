import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../../material.module';
import {SafeUrlPipe} from './pipes/safe-url';
import {ImageUploadComponent} from './components/image-upload/image-upload.component';
import {ImageManageComponent} from './components/image-manage/image-manage.component';
import {DeleteTestComponent} from './components/delete-test/delete-test.component';

const components = [
  ImageUploadComponent,
  ImageManageComponent,
  DeleteTestComponent
];

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  HttpClientModule
];

const pipes = [
  SafeUrlPipe
];

@NgModule({
  imports        : [
    ...modules,
    RouterModule
  ],
  declarations   : [...pipes, ...components],
  entryComponents: [ImageUploadComponent, DeleteTestComponent],
  exports        : [
    ...components,
    ...modules,
    ...pipes
  ]
})

export class SharedModule {
}
