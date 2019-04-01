import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SimpleCrudService {
  public controller = '/';
  constructor(
    private http: HttpClient
  ) {}

  /**
   * This function will create an object at server by calling a POST method.
   * @param model Type of object to create
   * @param data the data for creating
   * @returns Observable
   */
  // create<T extends IModel | {_id}>(_: T , data: T ): Observable<T | T[]> {
  //   return this.http.post<T | T[]>(`${this.controller}`, data);
  // }

  // read<T extends IModel | {_id}>(_: T ): Observable<T | T[]> {
  //   return this.http.get<T | T[]>(`${this.controller}`);
  // }

  // update<T extends IModel | {[_id: string]: string}>(_: T , data: T ): Observable<T | T[]> {
  //   return this.http.put<T | T[]>(`${this.controller}/${data._id}`, data);
  // }

  // delete<T extends IModel>(_: T , data: T ): Observable<T | T[]> {
  //   return this.http.delete<T | T[]>(`${this.controller}/${data._id}`);
  // }
}
