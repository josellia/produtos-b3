import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CoreApiService<T> {
  protected URL = 'http://localhost:3000/api/acoes';

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

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
