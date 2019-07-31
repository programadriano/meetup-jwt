import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
    public getToken(): string {
        return localStorage.getItem('token');
    }
    
    public isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        return token != null;
    }
}