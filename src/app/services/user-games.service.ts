import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserGamesService {
  //private api = 'http://localhost:3000/games';
  private api = 'https://gamehubbackend.onrender.com/games';

  constructor(private http: HttpClient) {}

  getOwnedGames(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/${userId}/owned`);
  }

  getWishlist(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/${userId}/wishlist`);
  }
}