import { Injectable } from '@angular/core';
// import { StudentEnrollment } from '../dashboard/modules/admission/admission.component';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../shared/student/student';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  controller = environment.APIURL;
  branches = new BehaviorSubject<Branches>([]);
  courses = new BehaviorSubject<Courses>([]);
  constructor(private http: HttpClient) {
    this.http.get<Branches>(this.controller + 'api/branches')
    .subscribe(a => this.branches.next(a));
    this.http.get<Courses>(this.controller + 'api/courses')
    .subscribe(a => this.courses.next(a));
  }

  public Admission(stud: Student) {
    return this.http.post(this.controller + 'api/students', stud);
  }
  public Enquiry(stud: CourseEnquiry) {
    return this.http.post(this.controller + 'api/courseenquiries', stud);
  }
  public get Branches() {
    return this.branches;
  }
  public get Courses() {
    return this.courses;
  }
}
type Branches = Branch[];
type Courses = Course[];
export class Branch {
  public id: string;
  public name: string;
}
export class Course {
  public courseId: string;
  public name: string;
  public tags: string[];
}
export class CourseEnquiry {
  public name: string;
  public phone: number;
  public branchid: string;
  public passoutYear: number;
  public haveDoneCoachingInPast: boolean;
  public pastCoaching: string;
  public courseid: Course;
  public demoScheduled: Date;
  public created: Date;
  public admissionSource: string;
}
