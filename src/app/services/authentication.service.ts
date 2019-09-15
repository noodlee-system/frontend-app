import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from 'src/app/models';
import { Router } from '@angular/router';

type LocalStorageItem = string | null;

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private baseUrl: string;
    private token: LocalStorageItem;
    private userContext: Object;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.baseUrl = environment.apiUrl;
        this.token = localStorage.getItem('token');
    }

    login(loginRequestObject: ILoginRequest): Observable<string> {
        const loginUrl = `${this.baseUrl}/authentication/login`;

        return this.http.post(loginUrl, loginRequestObject).pipe(
            map( (response: any) => {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    return response.token;
                }

                return null;
            })
        );
    }

    async logout(): Promise<void> {
        await this.removeToken();

        this.router.navigate(['/']);
    }

    getToken(): string {
        return this.token;
    }

    private async removeToken(): Promise<void> {
        await localStorage.removeItem('token');
        this.token = null;
    }
}
