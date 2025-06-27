import { Component, Signal, signal } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game } from '../../models/game';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { LoginComponent } from "../../components/login/login.component";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, CardComponent, FooterComponent, LoginComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})

export class Library {
  showLogin = false;
  games: Signal<Game[]>;
  sortKey = 'title';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(private gameService: GameService) {
    this.games = this.gameService.games;
  }

  ngOnInit() {
    this.gameService.load();
    this.games = this.gameService.games;
  }

  sortedGames() {
    const arr = this.games();
    let sorted = [...arr];
    if (this.sortKey === 'title') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (this.sortKey === 'price') {
      sorted.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    }
    if (this.sortOrder === 'desc') {
      sorted.reverse();
    }
    return sorted;
  }
  
}
