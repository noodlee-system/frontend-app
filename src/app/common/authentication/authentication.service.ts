import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ILoginRequest from '../../models/login-request.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private _baseUrl: string;
    token?: string;

    constructor(private _http: HttpClient) {
        this._baseUrl = environment.apiUrl;
        this.token = localStorage.getItem("token");
    }

    login(loginRequestObject: ILoginRequest): Observable<string> {
        const loginUrl: string = `${this._baseUrl}/auth`;

        return this._http.post(loginUrl, loginRequestObject).pipe(
            map( (response: any) => {
                if (response.token) {
                    return response.token;
                }

                return null;
            })
        )
    }
}
