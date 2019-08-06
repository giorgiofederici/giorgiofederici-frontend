import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// RxJS
import { Observable, from, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

// Cookies
// import { CookieService } from 'ngx-cookie-service';

// Auth
import { User } from '../../models/user.model';

// Shared
import { APIResponse } from '../../../../shared/models/api-response.model';

// Env
import { environment } from '../../../../../environments/environment';

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

  constructor(private httpClient: HttpClient) {}

  get user() {
    return { email: 'test@test.com' };
  }

  get authState() {
    return { email: 'test@test.com' };
  }

  createUser(email: string, password: string) {
    return { email: 'test@test.com' };
  }

  login(user: User): Observable<APIResponse> {
    // With credentials set to true will add response cookie
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    return this.httpClient.post<APIResponse>(
      `${environment.backendUrl}/api/v1/users/login`,
      user,
      httpOptions
    );
  }

  logout() {
    return this.httpClient.get<APIResponse>(
      `${environment.backendUrl}/api/v1/users/logout`,
      { withCredentials: true }
    );
  }

  isLoggedIn(): Observable<APIResponse> {
    return this.httpClient.get<APIResponse>(
      `${environment.backendUrl}/api/v1/users/isLoggedIn`,
      { withCredentials: true }
    );
  }
}
