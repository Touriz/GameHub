import { Component, Signal, signal } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Game } from '../../models/game';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from "../../components/card/card.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-store',
  imports: [CommonModule, FormsModule, HeaderComponent, CardComponent, FooterComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  games: Signal<Game[]>;
  sortOrder: 'asc' | 'desc' = 'asc';
  sortKey = 'title';

  filter: { [key: string]: boolean } = {
    multiplayer: false,
    storyMode: false,
    coop: false,
    online: false,
    freeToPlay: false,
    crossplay: false,
    singlePlayer: false,
    localMultiplayer: false,
    dlcAvailable: false,
    vrSupport: false,
    achievements: false,
    mods: false
  };

  searchText: string = '';

  showSearch = false;
  showFilters = false;

  // Opcional: para generar los filtros dinámicamente
  filtrosList = [
    { key: 'multiplayer', label: 'Multijugador' },
    { key: 'storyMode', label: 'Modo historia' },
    { key: 'coop', label: 'Cooperativo' },
    { key: 'online', label: 'Online' },
    { key: 'freeToPlay', label: 'Free to Play' },
    { key: 'crossplay', label: 'Crossplay' },
    { key: 'singlePlayer', label: 'Un jugador' },
    { key: 'localMultiplayer', label: 'Multijugador local' },
    { key: 'dlcAvailable', label: 'DLC disponible' },
    { key: 'vrSupport', label: 'Soporte VR' },
    { key: 'achievements', label: 'Logros' },
    { key: 'mods', label: 'Soporta mods' }
  ];

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

  filteredGames() {
    const games = this.sortedGames();
    return games.filter(game => {
      // Filtros booleanos
      if (this.filter['multiplayer'] && !game.multiplayer) return false;
      if (this.filter['storyMode'] && !game.storyMode) return false;
      if (this.filter['coop'] && !game.coop) return false;
      if (this.filter['online'] && !game.online) return false;
      if (this.filter['freeToPlay'] && !game.freeToPlay) return false;
      if (this.filter['crossplay'] && !game.crossplay) return false;
      if (this.filter['singlePlayer'] && !game.singlePlayer) return false;
      if (this.filter['localMultiplayer'] && !game.localMultiplayer) return false;
      if (this.filter['dlcAvailable'] && !game.dlcAvailable) return false;
      if (this.filter['vrSupport'] && !game.vrSupport) return false;
      if (this.filter['achievements'] && !game.achievements) return false;
      if (this.filter['mods'] && !game.mods) return false;
      // Filtro por texto (título)
      if (this.searchText && !game.title.toLowerCase().includes(this.searchText.toLowerCase())) return false;
      return true;
    });
  }
}
