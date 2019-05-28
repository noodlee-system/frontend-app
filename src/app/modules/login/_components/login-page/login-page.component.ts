import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ILoginRequest } from '../../_models/login-request.model';

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
        this._authenticationService.login(loginRequestObject).subscribe( (response) => {
            console.warn("response", response);
        })
    }
}
