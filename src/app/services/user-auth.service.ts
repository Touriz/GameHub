import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserAuthService {
  //private api = 'http://localhost:3000/games';
  private api = 'https://gamehubbackend.onrender.com/auth';

  isLoggedIn = signal(!!this.getToken());

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ access_token: string, user: any }>(`${this.api}/login`, { username, password })
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.access_token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this.isLoggedIn.set(true);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedIn.set(false);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}