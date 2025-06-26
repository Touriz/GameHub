import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: number = 0;
  @Input() console: string | string[] = '';
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

  getConsolesArray(): string[] {
  if (Array.isArray(this.console)) {
    return this.console;
  }
  if (typeof this.console === 'string' && this.console.includes(',')) {
    return this.console.split(',').map(c => c.trim());
  }
  return this.console ? [this.console] : [];
  }
}
