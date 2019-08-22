import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailConfirmValidator } from 'src/app/validators/email-confirm.validator';
import { IRegisterRequestObject } from 'src/app/models';

@Component({
    selector: 'register-form',
    templateUrl: './register-form.component.html'
})
export class RegisterFormComponent implements OnInit {
    @Input() errorMessage: string;
    @Output() registerEvent: EventEmitter<IRegisterRequestObject> = new EventEmitter();

    registerGroup: FormGroup;
    titleAlert: string;

    constructor(private _formBuilder: FormBuilder) {
        this.titleAlert = 'This field is required';
    }

    ngOnInit(): void {
        this.createForm();
    }

    registerUser(): void {
        const registerUserObject: IRegisterRequestObject = {
            username: this.registerGroup.value.username,
            password: this.registerGroup.value.password,
            firstname: this.registerGroup.value.firstname,
            lastname: this.registerGroup.value.lastname,
            email: this.registerGroup.value.email,
            country: this.registerGroup.value.country
        };

        this.registerEvent.emit(registerUserObject);
    }

    createForm(): void {
        this.registerGroup = this._formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            email: ['', [Validators.required, Validators.email]],
            emailConfirmation: ['', [Validators.required, Validators.email]],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            country: ['', Validators.required]
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
