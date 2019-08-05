import { Injectable } from '@angular/core';

// RxJS
import { Observable, from, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

// Firebase
import { AngularFireAuth } from 'angularfire2/auth';

// Shared
import { Credentials } from '../../models/user.model';
import { User } from 'firebase';


@Injectable()
export class AuthService {

    /*
    // authState -> Observable
    // do -> create some side effect
    auth$ = this.af.authState.pipe(tap(next => {
        if (!next) {
            this.store.set('user', null);
            return;
        }
        // Create the user object
        const user: User = {
            email: next.email,
            uid: next.uid,
            authenticated: true
        };
        // Assign the user object to store
        this.store.set('user', user);
    }));
    */

    constructor(
        private af: AngularFireAuth
    ) { }

    get user() {
        return this.af.auth.currentUser;
    }

    get authState() {
        return this.af.authState;
    }

    createUser(email: string, password: string) {
        return this.af.auth.createUserWithEmailAndPassword(email, password);
    }

    /*
    login(credentials: Credentials): Observable<any> {

        const userCredentialSubj = new Subject<any>();
        this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((userCredential: firebase.auth.UserCredential) => {
                userCredentialSubj.next(this.af.authState);
            }).catch((error) => {
                userCredentialSubj.error(error);
            });

        return userCredentialSubj;
    }*/

    login(credentials: Credentials): Promise<any> {
        return this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    }

    logoutUser() {
        return this.af.auth.signOut();
    }
}
