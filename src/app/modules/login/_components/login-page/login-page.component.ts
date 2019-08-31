import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services';
import { ILoginRequest } from 'src/app/models';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
    applicationName: string;
    organizationName: string;
    organizationLink: string;

    errorMessage: string;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.applicationName = 'Noodlee System';
        this.organizationName = 'Noodlee System';
        this.organizationLink = 'https://github.com/noodlee-system';
        this.errorMessage = '';
    }

    login(loginRequestObject: ILoginRequest) {
        this.authenticationService.login(loginRequestObject).subscribe(() => {
            this.errorMessage = '';

            this.router.navigate(['/dashboard']);
        }, (errorResponse: HttpErrorResponse) => this.errorMessage = errorResponse.error.message);
    }
}
