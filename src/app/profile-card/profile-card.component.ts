import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-card',
  imports: [CommonModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  @Input() name!: string;
  @Input() avatar!: string;

  isLoggedIn = signal(false);

  toggleLogin() {
    this.isLoggedIn.set(!this.isLoggedIn())
  }
}
