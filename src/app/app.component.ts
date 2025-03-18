import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from "./task-list/task-list.component";
import { Task } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks = signal<Task[]>([
    { id: 'T1', title: 'Learn Angular Signals'},
    { id: 'T2', title: 'Build a Component Library'},
  ]);
  selectedTask = signal<Task | null>(null);

  selectTask(task: Task) {
    this.selectedTask.set(task);
  }
}
