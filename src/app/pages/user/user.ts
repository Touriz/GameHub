import { Component } from '@angular/core';
import { UserGamesService } from '../../services/user-games.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  ownedGames: any[] = [];
  wishlist: any[] = [];
  userId = 1;

  constructor(private userGamesService: UserGamesService) {}

  ngOnInit() {
    this.userGamesService.getOwnedGames(this.userId).subscribe(games => this.ownedGames = games);
    this.userGamesService.getWishlist(this.userId).subscribe(games => this.wishlist = games);
  }
}
