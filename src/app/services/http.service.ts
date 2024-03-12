import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private baseURL = 'https://localhost:44347';
    headers!: HttpHeaders;
    requestOptions: any;

    constructor(private httpClient: HttpClient,
        private router: Router) {
        this.router.events.subscribe(
            (events) => {
                if (events instanceof NavigationEnd) {
                    const token = localStorage.getItem('token')
                    this.headers = new HttpHeaders({
                        'Content-Type': 'application/json; charset=utf-8',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization': `Bearer ${token}`
                    });
                    this.requestOptions = {
                        headers: this.headers,
                        withCredentials: true,
                    };
                }
            }
        )


    }

    public post(apibaseURL: string, data: any): Observable<any> {
        return this.httpClient
            .post<any>(`${this.baseURL}/${apibaseURL}`, data, this.requestOptions);
    }

    public put(apibaseURL: string, data: object): Observable<any> {
        return this.httpClient
            .put<any>(`${this.baseURL}/${apibaseURL}`, data, this.requestOptions);
    }

    public get(apibaseURL: string): Observable<any> {
        return this.httpClient
            .get<any>(`${this.baseURL}/${apibaseURL}`);
    }

    public delete(apibaseURL: string) {
        return this.httpClient
            .delete(`${this.baseURL}/${apibaseURL}`, this.requestOptions);
    }
}