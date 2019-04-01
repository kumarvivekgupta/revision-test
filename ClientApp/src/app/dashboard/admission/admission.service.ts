import { Injectable } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Student } from '../../shared/student/student';

@Injectable({
  providedIn: 'root'
})
export class AdmissionService extends DataService<Student> {
  constructor(http: HttpClient) {
    super(environment.APIURL + 'api/students', http);
  }
}

