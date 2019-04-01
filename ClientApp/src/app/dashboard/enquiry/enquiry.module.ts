import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnquiryRoutingModule } from './enquiry-routing.module';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CourseEnquiry, CoreService } from 'src/app/services/core.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EnquiryComponent],
  imports: [
    CommonModule,
    FormsModule,
    EnquiryRoutingModule
  ]
})
export class EnquiryModule {

}
