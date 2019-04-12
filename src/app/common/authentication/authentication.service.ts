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
    baseUrl: string;
    token?: string;

    constructor(private _http: HttpClient) {
        this.baseUrl = environment.apiUrl;
        this.token = localStorage.getItem("token");
    }

    login(username: string, password: string): void /*Observable<string>*/ {
        const loginUrl: string = `${this.baseUrl}/auth`;
        
        const loginRequestObject: ILoginRequest = {
            username,
            password
        }

        console.log("loginRequestObject", loginRequestObject);

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
