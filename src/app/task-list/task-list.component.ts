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
  // a static array of task objects
  tasks = [
    { id: 'T1', title: 'Learn Angular Signals', description: 'A hands-on guide.' },
    { id: 'T2', title: 'Build a Component Library', description: 'An advanced project.' },
  ];
  // selectedTask = a SIGNAL holding the selected task
  selectedTask = signal<Task | null>(null);

  // updates selectedTask when a user clicks on a task
  selectTask(task: Task) {
    this.selectedTask.set(task);
  }
}