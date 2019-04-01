import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { AdmissionModule } from './admission/admission.module';
import { DemoModule } from './demo/demo.module';
import { EnquiryModule } from './enquiry/enquiry.module';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MaterialModule,
    AdmissionModule,
    DemoModule,
    EnquiryModule
  ],
  providers: []
})
export class DashboardModule {
}
