import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, catchError, map, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CoreApiService<T> {

  constructor(private http: HttpClient){}

  findAll(url:string, params?: HttpParams, headers?: HttpHeaders):Observable<T[]>{
    const options = {params, headers}
    return this.http.get<T[]>(url, options).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) =>  this.handleError(error))
    )
  }

  post(url:string, objectPost: T): Observable<T> {
    return this.http.post<T>(url, objectPost);
  }

  delete(url:string, id: number | string):Observable<T> {
    return this.http.delete<T>(`${url}/${id}`);
 }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
