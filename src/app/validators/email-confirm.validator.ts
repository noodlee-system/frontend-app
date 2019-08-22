import { ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

const EmailsNotEqualError = {
    emailsNotEqual: true
};

export const EmailConfirmValidator: ValidatorFn = (
    group: FormGroup
): ValidationErrors | null => {
    const registerForm = group.value;

    if (registerForm && registerForm.email !== registerForm.emailConfirmation) {
        group.get('emailConfirmation').setErrors({
            ...group.get('emailConfirmation').errors,
            ...EmailsNotEqualError
        });

        return EmailsNotEqualError;
    }

    group.get('emailConfirmation').setErrors(null);
    return null;
};
