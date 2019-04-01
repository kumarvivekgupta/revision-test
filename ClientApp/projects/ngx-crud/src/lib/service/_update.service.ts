import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private _service: CrudService;

  constructor(private http: HttpClient) { }

  registerService(crud: CrudService) {
    this._service = crud;
  }

  update<T extends IModel>(data: T) {
    this._service.Loading.next(true);
    const url = `${this._service.controller}${this._service.getKey(data)}`;
    this.http.patch(url, data)
      .subscribe(
        (response: any) => {
          this._service.Loading.next(true);
        },
        err => {
          this._service.Loading.next(true);
        }
      );
  }

  updateSubscription<T extends IModel>(data: T): Observable<T | T[]> {
    this._service.Loading.next(true);
    const url = `${this._service.controller}`;
    return this.http.post(url, data, this._service.httpOptions)
      .pipe(
        // Catch Error
        tap((response: T[] | any) => {
          this._service.Loading.next(false);
        })
      );
  }
}
