import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  description?: string;
}

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
selectedTask() {
throw new Error('Method not implemented.');
}
  
}