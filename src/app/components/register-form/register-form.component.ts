import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'register-form',
    templateUrl: './register-form.component.html'
})
export class FormComponent implements OnInit {
    formGroup: FormGroup;
    titleAlert: string = 'This field is required';
    post: any = '';

    constructor(private _formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.formGroup = this._formBuilder.group({
            'username': [null],
            'password': [null],
            'email': [null],
            'emailConfirmation': [null],
            'firstName': [null, ],
            'lastName': [null],
            'city': [null],
            'country': [null]
        });
    }
}
