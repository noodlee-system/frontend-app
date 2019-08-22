import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailConfirmValidator } from 'src/app/validators/email-confirm.validator';

@Component({
    selector: 'register-form',
    templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {
    registerGroup: FormGroup;
    titleAlert: string;

    constructor(private _formBuilder: FormBuilder) {
        this.titleAlert = 'This field is required';
    }

    ngOnInit(): void {
        this.createForm();
    }

    onSubmit(): void {
        console.log(this.registerGroup.value);
        this.registerGroup.reset();
    }

    createForm(): void {
        this.registerGroup = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            email: ['', [Validators.required, Validators.email]],
            emailConfirmation: ['', [Validators.required, Validators.email]],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
        }, {
            validators: [EmailConfirmValidator]
        });
    }

    resetForm(): void {
        this.registerGroup.reset();
    }

    emailConfirmationErrorShown(): boolean {
        return !this.registerGroup.get('emailConfirmation').hasError('required')
            && !this.registerGroup.get('emailConfirmation').hasError('email')
            && this.registerGroup.hasError('emailsNotEqual');
    }
}
