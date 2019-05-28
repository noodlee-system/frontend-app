import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { IRegisterRequestObject } from 'src/app/models';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _baseUrl: string;

    constructor(private _http: HttpClient) {
        this._baseUrl = environment.apiUrl;
    }

    register(registerRequestObject: IRegisterRequestObject): Observable<void> {
        const registerUrl = `${this._baseUrl}/register`;

        return this._http.post(registerUrl, registerRequestObject).pipe(
            map( (response: any) => {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    return response.token;
                }

                return null;
            })
        );
    }
}
