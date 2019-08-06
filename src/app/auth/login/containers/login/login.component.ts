import { Component } from '@angular/core';

// Forms
import { FormGroup } from '@angular/forms';

// RxJS
import { Store, select } from '@ngrx/store';

// Auth shared
import { User } from '../../../shared/models/user.model';
import * as fromAuth from '../../../shared/reducers';
import { LoginActions } from '../../../shared/actions';

@Component({
  selector: 'admin-login',
  template: `
    <div>
      <admin-auth-form (submitted)="loginUser($event)">
        <h1>Login</h1>
        <button type="submit">
          Login
        </button>
        <div class="error" *ngIf="error">
          {{ error }}
        </div>
      </admin-auth-form>
    </div>
  `
})
export class LoginComponent {
  error: string;

  constructor(private store: Store<fromAuth.State>) {}

  async loginUser(event: FormGroup) {
    const user: User = {
      email: event.value.email,
      password: event.value.password
    };

    this.store.dispatch(new LoginActions.Login({ user }));
  }
}
