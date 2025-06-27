import { Component, Signal } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardComponent } from "../../components/card/card.component";
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "../../components/login/login.component";

@Component({
  selector: 'app-storefront',
  imports: [HeaderComponent, FooterComponent, CardComponent, CommonModule, LoginComponent],
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.scss'
})
export class Storefront {
  games: Signal<Game[]>;
  showLogin = false;

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
    if (el) {
      const card = el.querySelector('app-card');
      const cardWidth = card ? (card as HTMLElement).offsetWidth : 320;
      const gap = 24; // gap-6 en Tailwind = 1.5rem = 24px
      el.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    }
  }

  scrollRight(genre: string) {
    const el = document.getElementById('carousel-' + genre);
    if (el) {
      const card = el.querySelector('app-card');
      const cardWidth = card ? (card as HTMLElement).offsetWidth : 320;
      const gap = 24;
      el.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    }
  }

  canScrollLeft(genre: string): boolean {
    const el = document.getElementById('carousel-' + genre);
    if (!el) return false;
    // Habilita si el scroll es mayor que la mitad del ancho de una card (más gap)
    const card = el.querySelector('app-card');
    const cardWidth = card ? (card as HTMLElement).offsetWidth : 320;
    const gap = 24;
    return el.scrollLeft > (cardWidth + gap) / 2;
  }

  canScrollRight(genre: string): boolean {
    const el = document.getElementById('carousel-' + genre);
    if (!el) return false;
    const card = el.querySelector('app-card');
    const cardWidth = card ? (card as HTMLElement).offsetWidth : 320;
    const gap = 24;
    return el.scrollLeft + el.clientWidth < el.scrollWidth - (cardWidth + gap) / 2;
  }

}
