import { Component, OnInit } from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// NgRx
import { Store, select } from '@ngrx/store';

// Auth
import * as fromAuth from '../../../../auth/shared/reducers';
import { User } from '../../../../auth/shared/models/user.model';
import { LogoutActions } from 'src/app/auth/shared/actions';


@Component({
    selector: 'admin-root',
    templateUrl: './admin-root.component.html',
    styleUrls: ['admin-root.component.scss']
})
export class AdminRootComponent implements OnInit {

    user$: Observable<User>;
    loggedIn$: Observable<boolean>;

    constructor(
        private store: Store<fromAuth.State>
    ) { }

    ngOnInit() {
        this.user$ = this.store.pipe(select(fromAuth.getUser));
        this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    }

    onLogout() {
        this.store.dispatch(new LogoutActions.LogoutConfirmation());
    }

}
