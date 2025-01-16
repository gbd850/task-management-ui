import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TaskGroup } from '../taskGroup';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {

  tasks: TaskGroup[] = [];

  isDataLoaded = false;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTaskList()
    .subscribe(tasks => {
          console.log(tasks);
          this.tasks = tasks;
        });
  }

  resolveTask(id: number, resolve: boolean) {
    this.taskService.resolveTask(id, resolve).subscribe(() => {
      this.ngOnInit()
    })
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.ngOnInit()
    })
  }

}
