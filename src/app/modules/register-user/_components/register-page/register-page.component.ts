import { Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { IRegisterRequestObject } from 'src/app/models';

@Component({
    selector: 'register-page',
    templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {
    applicationName: string;
    organizationName: string;
    organizationLink: string;

    constructor(private _userService: UserService) {
        this.applicationName = 'Noodlee System';
        this.organizationName = 'Noodlee System';
        this.organizationLink = 'https://github.com/noodlee-system';
    }

    register(registerRequestObject: IRegisterRequestObject): void {
        this._userService.register(registerRequestObject).subscribe( (response) => {
            console.warn("response", response);
        });
    }
}
