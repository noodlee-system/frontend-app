import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ILoginRequest from './login-request.model';
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

    login(loginRequestObject: ILoginRequest): void /*Observable<string>*/ {
        const loginUrl: string = `${this._baseUrl}/auth`;

        console.log("Login request success!", loginRequestObject);

        // Waiting for backend authentication functionalities
        // return this._http.post(loginUrl, loginRequestObject).pipe(
        //     map( (response: any) => {
        //         if (response.token) {
        //             return response.token;
        //         }

        //         return null;
        //     })
        // )
    }
}
