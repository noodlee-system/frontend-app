import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedNotAllowedGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        const token: string = localStorage.getItem('token');

        if (token) {
            return true;
        }

        this.router.navigate(['/dashboard']);
        return false;
    }
}
