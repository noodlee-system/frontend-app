import { Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { IRegisterRequestObject } from 'src/app/models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'register-page',
    templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {
    applicationName: string;
    organizationName: string;
    organizationLink: string;

    registrationSuccess: boolean;
    errorMessage: string;

    constructor(private _userService: UserService) {
        this.applicationName = 'Noodlee System';
        this.organizationName = 'Noodlee System';
        this.organizationLink = 'https://github.com/noodlee-system';

        this.registrationSuccess = false;
        this.errorMessage = '';
    }

    register(registerRequestObject: IRegisterRequestObject): void {
        this._userService.registerUser(registerRequestObject).subscribe(() => {
            this.errorMessage = '';
            this.registrationSuccess = true;
        }, (errorResponse: HttpErrorResponse) => this.errorMessage = errorResponse.error.message);
    }
}
