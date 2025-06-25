import { Component, Signal, signal } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game } from '../../models/game';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, CardComponent, FooterComponent],
  templateUrl: './library.html',
  styleUrl: './library.scss'
})

export class Library {
  games: Signal<Game[]>;
  sortKey = 'title';

  constructor(private gameService: GameService) {
    this.games = this.gameService.games;
  }

  ngOnInit() {
    this.gameService.load();
    this.games = this.gameService.games;
  }

  sortedGames() {
    const arr = this.games(); // Usa el signal para obtener los juegos actuales
    if (this.sortKey === 'title') {
      return [...arr].sort((a, b) => a.title.localeCompare(b.title));
    }
    if (this.sortKey === 'price') {
      return [...arr].sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
    }
    return arr;
  }
}
