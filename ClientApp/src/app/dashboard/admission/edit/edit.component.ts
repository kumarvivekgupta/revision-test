import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/shared/student/student';
import { switchMap } from 'rxjs/operators';
import { AdmissionService } from '../admission.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  student: Student;
  constructor(private route: ActivatedRoute, private studs: AdmissionService, private toastr: ToastrService) {
    route.paramMap
      .pipe(switchMap(a => studs.get(a.get('id'))))
      .subscribe(a => this.student = a);
  }

  ngOnInit() {
  }

  update() {
    this.studs.update('' + this.student.enrollmentId, this.student)
      .subscribe(() => this.toastr.success('Done'));
  }
}
