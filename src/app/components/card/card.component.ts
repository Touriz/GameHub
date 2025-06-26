import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() console: string = '';
  @Input() genre: string = '';
  @Input() multiplayer: boolean = false;
  @Input() storyMode: boolean = false;
  @Input() coop: boolean = false;
  @Input() releaseYear: number = 0;
  @Input() developer: string = '';
  @Input() online: boolean = false;
  @Input() freeToPlay: boolean = false;
  @Input() crossplay: boolean = false;
  @Input() singlePlayer: boolean = false;
}
