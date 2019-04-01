import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { SharedModule } from 'src/app/shared/shared.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [HomeComponent, ListComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AdmissionRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    SweetAlert2Module
  ]
})
export class AdmissionModule { }
