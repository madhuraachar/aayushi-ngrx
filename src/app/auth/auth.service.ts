import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    login(email, password) {
        const user: User = {email: email, password: password}
        return this.http.post<User>('/api/login',user)
    }
}