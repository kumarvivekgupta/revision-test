import { Component, OnInit } from '@angular/core';
import { CourseEnquiry, CoreService } from 'src/app/services/core.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent {

  enquiry = new CourseEnquiry();
  constructor(public core: CoreService, private toastr: ToastrService) { }

  eq() {
    console.log(this.enquiry.haveDoneCoachingInPast);
    this.core.Enquiry(this.enquiry).subscribe((r) => {
      this.toastr.success('new Student Enquiry');
      this.enquiry = new CourseEnquiry();
    },
      e => {
        this.toastr.success(e, 'Failed');
      });
  }

}
