import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ILoginRequest from 'src/app/common/authentication/login-request.model';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    @Output() loginSubmit = new EventEmitter<ILoginRequest>();
    
    loginGroup: FormGroup

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.buildLoginForm();
    }

    buildLoginForm(): void {
        this.loginGroup = this._formBuilder.group({
            'username': [null, Validators.required],
            'password': [null, Validators.required],
        });
    }

    onSubmit(formGroup: FormGroup): void {
        const loginRequestObject: ILoginRequest = {
            username: formGroup.get('username').value,
            password: formGroup.get('password').value
        }

        this.loginSubmit.emit(loginRequestObject);
    }
}
