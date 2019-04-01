import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  private _service: CrudService;

  constructor(private http: HttpClient) { }

  registerService(crud: CrudService) {
    this._service = crud;
  }

  delete<T extends IModel>(data: T) {
    this._service.Loading.next(true);
    const url = `${this._service.controller}${this._service.getKey(data)}`;
    this.http.delete<T>(url)
      .subscribe(
        (response) => {
          this._service.Loading.next(true);
        },
        err => {
          this._service.Loading.next(true);
        }
      );
  }

  deleteSubscription<T extends IModel>(data: T): Observable<T> {
    this._service.Loading.next(true);
    const url = `${this._service.controller}${this._service.getKey(data)}`;
    return this.http.delete<T>(url)
      .pipe(
        // Catch Error
        tap((response) => {
          this._service.Loading.next(false);
        })
      );
  }

}
