import { Component, OnInit } from '@angular/core';

// RxJs
import { Observable } from 'rxjs';

// NgRx
import { Store, select } from '@ngrx/store';

// Auth
import * as fromAuth from '../../../auth/shared/reducers';
import { User } from 'src/app/auth/shared/models/user.model';
import { UserActions } from 'src/app/auth/shared/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    // this.user$ = this.store.pipe(select(fromAuth.getUser));
    // this.store.dispatch(new UserActions.GetUser());
  }
}
