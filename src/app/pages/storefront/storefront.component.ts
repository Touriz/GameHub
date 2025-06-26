import { Component, Signal } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardComponent } from "../../components/card/card.component";
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-storefront',
  imports: [HeaderComponent, FooterComponent, CardComponent, CommonModule],
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.scss'
})
export class Storefront {
  games: Signal<Game[]>;

  constructor(private gameService: GameService) {
    this.games = this.gameService.games;
  }

  ngOnInit() {
    this.gameService.load();
  }

  get genres(): string[] {
    return [...new Set(this.games().map(game => game.genre).filter(g => !!g))];
  }

  gamesByGenre(genre: string): Game[] {
    return this.games().filter(game => game.genre === genre);
  }

  scrollLeft(genre: string) {
    const el = document.getElementById('carousel-' + genre);
    if (el) el.scrollBy({ left: -320, behavior: 'smooth' }); // 320 = ancho card + gap
  }

  scrollRight(genre: string) {
    const el = document.getElementById('carousel-' + genre);
    if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
  }
}
