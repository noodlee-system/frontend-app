import { Component } from '@angular/core';
import ILoginRequest from 'src/app/models/login-request.model';
import { AuthenticationService } from 'src/app/common/authentication/authentication.service';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent {
    applicationName: string;
    organizationName: string;
    organizationLink: string;

    constructor( private _authenticationService: AuthenticationService) {
        this.applicationName = 'Noodlee System';
        this.organizationName = 'Noodlee System';
        this.organizationLink = 'https://github.com/noodlee-system';
    }

    login(loginRequestObject: ILoginRequest) {
        this._authenticationService.login(loginRequestObject)
    }
}
