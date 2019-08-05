import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    /*
    private AUTH_BASE_URL = environment.backendUrl + '/auth';

    constructor(private httpClient: HttpClient) { }

    login({ username, password, email }: Credentials): Observable<User> {
        const url = `${this.AUTH_BASE_URL}/login`;
        return this.httpClient.post<User>(url, { username, password });
    }

    logout() {
        return of(true);
    }

    signup({ username, password, email }: Credentials): Observable<User> {
        const url = `${this.AUTH_BASE_URL}/signup`;
        return this.httpClient.post<User>(url, { username, password, email });
    }
    */

}
