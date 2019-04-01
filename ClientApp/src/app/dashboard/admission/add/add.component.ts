import { Component, OnInit } from '@angular/core';
import { Student, IBatch } from '../../../shared/student/student';
import { AdmissionService } from '../admission.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  title: string;
  admission = new Student();
  constructor(private admissionS: AdmissionService, private toastr: ToastrService) {
    this.title = 'Add Student';
  }

  ngOnInit() {
  }
  create() {
    this.admissionS.create(this.admission)
      .subscribe((a) => {
        console.log(a);
        this.admission = new Student();
        this.toastr.success('Successfully added student', 'Success');
      });
  }
}
