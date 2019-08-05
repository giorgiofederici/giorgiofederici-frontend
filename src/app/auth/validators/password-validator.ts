import { AbstractControl } from '@angular/forms';

export class PasswordValidator {

    static MatchPassword(abastractControl: AbstractControl) {
        let password = abastractControl.get('password').value; // to get value in input tag
        let confirmPassword = abastractControl.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            abastractControl.get('confirmPassword').setErrors({ MatchPassword: true })
        } else {
            return null
        }
    }

}