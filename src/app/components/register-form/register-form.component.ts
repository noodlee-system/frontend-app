import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'register-form',
    templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {
    formGroup: FormGroup;
    titleAlert: string;

    constructor(private _formBuilder: FormBuilder) {
        this.titleAlert = 'This field is required';
    }

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.formGroup = this._formBuilder.group({
            'username': [null],
            'password': [null],
            'email': [null],
            'emailConfirmation': [null],
            'firstName': [null],
            'lastName': [null],
            'city': [null],
            'country': [null]
        });
    }

    onSubmit(): void {
        console.log(this.formGroup.value);
    }
}
