export interface Credentials {
    email: string;
    password: string;
}

export interface User {
    email: string;
    uid: string;
    authenticated: boolean;
}
