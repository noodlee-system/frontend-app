import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services';
import { ILoginRequest } from 'src/app/models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
    applicationName: string;
    organizationName: string;
    organizationLink: string;

    errorMessage: string;

    constructor( private _authenticationService: AuthenticationService) {
        this.applicationName = 'Noodlee System';
        this.organizationName = 'Noodlee System';
        this.organizationLink = 'https://github.com/noodlee-system';
        this.errorMessage = '';
    }

    login(loginRequestObject: ILoginRequest) {
        this._authenticationService.login(loginRequestObject).subscribe((response) => {
            this.errorMessage = '';
            console.warn('response', response);
        }, (errorResponse: HttpErrorResponse) => this.errorMessage = errorResponse.error.message);
    }
}
