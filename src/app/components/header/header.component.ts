import { CommonModule, NgFor } from '@angular/common';
import { Component, computed, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "../login/login.component";
import { UserAuthService } from '../../services/user-auth.service';


@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isLoggedIn = computed(() => this.authService.isLoggedIn());

   constructor(private authService: UserAuthService) {}

   
  @Output() openLogin = new EventEmitter<void>();

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
  }
}
