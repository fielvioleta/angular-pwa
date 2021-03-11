import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

    private apiUrl: string;
    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
        this.apiUrl = environment.app_url;
    }

    get<T>(p: string = ''): Observable<T> {
        const url = p ? (this.apiUrl + '/' + p) : this.apiUrl;
        return (this.http.get(url)).pipe(
            catchError((err: any) => {
                if (err.statusText && err.statusText === 'Unauthorized') {

                }
                throw new Object({ status: err.status, statusText: err.statusText, error: err.error }) ;
            })
        ) as any;
    }

    delete<T>(id: string = ''): Observable<T> {
        const url = this.apiUrl + '/' + id;
        return (this.http.delete(url)).pipe(
          catchError((err: any) => {
              this.navigateError(err);
              throw new Object({ status: err.status, statusText: err.statusText, error: err.error }) ;
          })
      ) as any;
    }

    post<T>(url: string, body?: any, type: string = 'services'): Observable<T> {
        return (this.http.post(`${this.apiUrl}/${url}`, body)).pipe(
            catchError((err: any) => {
                this.navigateError(err);
                throw new Object({ status: err.status, statusText: err.statusText, error: err.error }) ;
            })
        ) as any;
    }

    put<T>(url: string, body?: any, type: string = 'services'): Observable<T> {
        return (this.http.put(`${this.apiUrl}/${url}`, body)).pipe(
            catchError((err: any) => {
                this.navigateError(err);
                throw new Object({ status: err.status, statusText: err.statusText, error: err.error }) ;
            })
        ) as any;
    }

    async navigateError(err) {
        if (err.statusText && err.statusText === 'Unauthorized') {
            await this.router.navigate(['users/end']);
        }
    }
}
