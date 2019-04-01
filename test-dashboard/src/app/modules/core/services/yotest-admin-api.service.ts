import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from '../models/admin.model';
import {map} from 'rxjs/operators';
import {ADMIN_AUTH_TOKEN} from '../../../utils/constants';
import {Test} from '../models/test.model';


@Injectable()
export class YotestAdminApiService extends HttpService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  login(data): Observable<Admin> {
    return super.get<AdminResponse<Admin>>('login', data).pipe(map(response => {
      localStorage.setItem(ADMIN_AUTH_TOKEN, response.token);
      return response.data;
    }));
  }

  getTests(): Observable<Test[]> {
    return super.get<AdminResponse<Test[]>>('tests').pipe(map(res => res.data));
  }

  storeLogo(file: any): Observable<any> {
    const data = new FormData();
    data.append('diagram', file);
    return this.post(`upload/diagram`, data);
  }

  createTest(payload: any): Observable<Test> {
    return this.post<any>('tests', payload).pipe(
      map(res => res.data)
    );
  }

  deleteTest(testId: number): Observable<any> {
    return this.delete('tests/' + testId);
  }
  createQues(data):Observable<any>{
    return super.post('questions',data);
  }
}

interface AdminResponse<T> {
  token?: string;
  data: T;
}
