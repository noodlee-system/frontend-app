import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services';

@Injectable()
export class ErrorHandlingHttpInterceptor implements HttpInterceptor {
    constructor(
        private authentication: AuthenticationService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token: string = this.authentication.getToken();
        const requestHeaders: HttpHeaders = request.headers.set('Content-Type', 'application/json');

        if (token) {
            requestHeaders.set('Authorization', `Bearer ${token}`);
        }

        request = request.clone({
            url: request.url,
            headers: requestHeaders
        });

        return next
            .handle(request)
            .pipe(catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.authentication.logout();
                    this.router.navigate(['/login']);
                } else if (error.status === 403) {
                    this.router.navigateByUrl('/403', {replaceUrl: true});
                } else if (error.status === 404) {
                    this.router.navigateByUrl('/404', {replaceUrl: true});
                } else if (error.status === 500) {
                    this.router.navigateByUrl('/500', {replaceUrl: true});
                }

                return of(error);
            }) as any);
    }
}
