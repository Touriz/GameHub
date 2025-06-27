import { Component, Output, EventEmitter } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule,CommonModule],
})
export class LoginComponent {
  username = ''; // Cambia email por username
  password = '';
  error = '';

  @Output() close = new EventEmitter<void>();

  constructor(private authService: UserAuthService) {}

  login() {
    console.log(this.username, this.password);
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        this.onClose();
      },
      error: err => {
        console.error('Login error:', err);
        this.error = 'Credenciales incorrectas';
      }
    });
  }

  onClose() {
    this.close.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }
}