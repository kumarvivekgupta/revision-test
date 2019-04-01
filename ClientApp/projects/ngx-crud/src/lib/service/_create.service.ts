import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CrudService } from './crud.service';
import { CrudEvent } from './cache/CrudEventType.enum';

@Injectable()
export class CreateService {
  private _service: CrudService;

  constructor(
    private http: HttpClient
  ) { }

  registerService(crud: CrudService) {
    this._service = crud;
  }

  create<T extends IModel>(data: T) {
    const MC = this._service.modelConfig[data.constructor.name];
    this._service.Loading.next(true);
    const url = `${this._service.controller}${MC.tableName}`;
    this._service.events.next({
      data: data,
      isOptimistic: this._service.Optimistic,
      tableName: MC.tableName,
      message: 'Creating ...',
      type: CrudEvent.CreateStart
    });
    this.http.post<T>(url, data, this._service.httpOptions)
      .subscribe(
        (response) => {
          this._service.Loading.next(false);
          this._service.events.next({
            data: data,
            isOptimistic: this._service.Optimistic,
            tableName: MC.tableName,
            message: 'Creating ...',
            type: CrudEvent.CreateFinish
          });
        },
        err => {
          this._service.Loading.next(false);
          this._service.events.next({
            data: data,
            isOptimistic: this._service.Optimistic,
            tableName: MC.tableName,
            message: 'Creating ...',
            type: CrudEvent.CreateFail
          });
        }
      );
  }

  createSubscription<T extends IModel>(data: T): Observable<T | any> {
    this._service.Loading.next(true);
    const url = `${this._service.controller}`;
    return this.http.post<T>(url, data, this._service.httpOptions)
      .pipe(
        // Catch Error
        tap((response) => {
          this._service.Loading.next(false);
        })
      );
  }
}
