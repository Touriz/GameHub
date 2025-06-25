import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {
  private api = 'http://localhost:3000/games';

  games = signal<Game[]>([]);

  constructor(private http: HttpClient) {}

  load() {
    this.http.get<Game[]>(this.api)
      .pipe(tap(data => this.games.set(data)))
      .subscribe();
  }
}