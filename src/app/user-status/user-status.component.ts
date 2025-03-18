import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-user-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-status.component.html',
  styleUrl: './user-status.component.css'
})
export class UserStatusComponent {
  // Signal to store user status; A signal is a reactive state container that automatically updates the UI when changed.
     // The userStatus signal holds one of three possible values: 'active', 'inactive', or 'banned'.  Initially, the user status is set to 'active'.

  userStatus = signal<'active' | 'inactive' | 'banned'>('active');

  // When userStatus changes, statusColor automatically updates without manual tracking.
  statusColor = computed(() => {
    switch (this.userStatus()) {
      case 'active': return 'green';
      case 'inactive': return 'gray';
      case 'banned': return 'red';
      default: return 'white';
    }
  });

  // Function to update status
  // Whenever this function is called, it sets userStatus to the new value 'active'. 'inactive'. or 'banned'. Since computed automatically tracks userStatus. the UI updates instantly.
  setStatus(status: 'active' | 'inactive' | 'banned') {
    this.userStatus.set(status);

  }
}
