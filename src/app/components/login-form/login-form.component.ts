import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {
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
        console.log(formGroup);
    }
}
