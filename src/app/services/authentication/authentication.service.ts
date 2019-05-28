import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from 'src/app/models';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private _baseUrl: string;
    private _token?: string;

    constructor(private _http: HttpClient) {
        this._baseUrl = environment.apiUrl;
        this._token = localStorage.getItem('token');
    }

    login(loginRequestObject: ILoginRequest): Observable<string> {
        const loginUrl = `${this._baseUrl}/auth`;

        return this._http.post(loginUrl, loginRequestObject).pipe(
            map( (response: any) => {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    return response.token;
                }

                return null;
            })
        );
    }

    logout(): void {
        localStorage.setItem('token', null);
        this._token = null;
    }

    get token(): string {
        return this._token;
    }
}
