import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReadService {
  private _service: CrudService;

  constructor(private http: HttpClient) { }

  registerService(crud: CrudService) {
    this._service = crud;
  }

  read<T extends IModel>() {
    this._service.Loading.next(true);
    const url = `${this._service.controller}`;
    this.http.get<T>(url, this._service.httpOptions)
      .subscribe(
        (response) => {
          this._service.Loading.next(true);
        },
        err => {
          this._service.Loading.next(true);
        }
      );
  }

  readSubscription<T extends IModel>(): Observable<T[]> {
    this._service.Loading.next(true);
    const url = `${this._service.controller}`;
    return this.http.get<T>(url, this._service.httpOptions)
      .pipe(
        // Catch Error
        tap((response: T[] | any) => {
          this._service.Loading.next(false);
        })
      );
  }

}
