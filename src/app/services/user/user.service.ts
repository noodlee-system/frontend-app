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

    registerUser(registerRequestObject: IRegisterRequestObject): Observable<any> {
        const registerUrl = `${this._baseUrl}/register`;

        return this._http.post(registerUrl, registerRequestObject);
    }
}
