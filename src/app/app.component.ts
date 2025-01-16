import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Task } from './task/task';
import { TaskService } from './task/service/task.service';
import { HttpClientModule, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  isDataLoaded = false;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTaskList().subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks;
    });
  }

  resolveTask(id: number, resolve: boolean) {
    this.taskService.resolveTask(id, resolve).subscribe(() => {
      this.ngOnInit()
    })
  }

  title = 'task-management-ui';
}
