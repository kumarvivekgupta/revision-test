import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ADMIN_AUTH_TOKEN, API_KEY, AUTH_TOKEN} from '../../../utils/constants';

export abstract class HttpService {
  private BASE_URL = environment.baseUrl;

  protected constructor(protected http: HttpClient) {
  }

  private _buildRequestOptions(): RequestOptions {
    let headers = {};

    const apiKey = localStorage.getItem(API_KEY);
    const authToken = localStorage.getItem(AUTH_TOKEN);
    const adminAuthToken = localStorage.getItem(ADMIN_AUTH_TOKEN);
    if (apiKey) {
      headers = {[API_KEY]: apiKey};
    }
    if (authToken) {
      headers = {[API_KEY]: authToken};
    }
    if (adminAuthToken) {
      headers = {Authorization: `Bearer ${adminAuthToken}`};
    }
    return {headers: new HttpHeaders(headers)};
  }

  private _objToSearchParams(obj): { [param: string]: string | string[] } {
    return Object.keys(obj).reduce((params, current) => {
      return {...params, [current]: obj[current]};
    }, {});
  }

  protected get<T>(endPoint: string, data?: any): Observable<T> {

    const options = this._buildRequestOptions();

    if (data) {
      options.params = this._objToSearchParams(data);
    }

    return this.http.get<T>(`${this.BASE_URL}/${endPoint}`, options);
  }

  protected post<T>(endPoint: string, data?: any, reportProgress = false): Observable<T> {

    const options = this._buildRequestOptions();
    if (reportProgress) {
      options.reportProgress = reportProgress;
    }

    return this.http.post<T>(`${this.BASE_URL}/${endPoint}`, data, options);
  }

  protected patch<T>(endPoint: string, data?: any): Observable<T> {

    const options = this._buildRequestOptions();

    return this.http.patch<T>(`${this.BASE_URL}/${endPoint}`, data, options);
  }

  protected put<T>(endPoint: string, data?: any): Observable<T> {

    const options = this._buildRequestOptions();
    return this.http.put<T>(`${this.BASE_URL}/${endPoint}`, data, options);
  }

  protected delete<T>(endPoint: string): Observable<T> {
    const options = this._buildRequestOptions();

    return this.http.delete<T>(`${this.BASE_URL}/${endPoint}`, options);
  }
}

interface RequestOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
