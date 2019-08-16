import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static MatchPassword(abastractControl: AbstractControl) {
    const password = abastractControl.get('password').value; // to get value in input tag
    const confirmPassword = abastractControl.get('confirmPassword').value; // to get value in input tag
    if (password !== confirmPassword) {
      abastractControl
        .get('confirmPassword')
        .setErrors({ MatchPassword: true });
    } else {
      return null;
    }
  }
}
