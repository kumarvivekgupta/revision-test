import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class DataService<T> {
  constructor(private url: string, private http: HttpClient) { }
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  get(id: string) {
    return this.http.get<T>(this.url + '/' + id, this.options);
  }
  getAll() {
    return this.http.get<T[]>(this.url, this.options);
  }

  create(resource: T) {
    return this.http.post<T>(this.url, resource, this.options);
  }

  update(id: string, resource: T) {
    return this.http.put<T>(this.url + '/' + id, resource, this.options);
  }

  delete(id: string) {
    return this.http.delete<T>(this.url + '/' + id, this.options);
  }
}
