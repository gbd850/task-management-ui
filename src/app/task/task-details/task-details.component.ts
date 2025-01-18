import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../service/task.service';
import { TaskRequest } from '../taskRequest';
import { FormsModule } from '@angular/forms';
import { Category } from '../category';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
})
export class TaskDetailsComponent implements OnInit {

  taskId: number | null = null;

  task: TaskRequest = {
    name: '',
    categoryName: '',
  } as TaskRequest;

  categories: Category[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.taskService.getCategoryList().subscribe((categories) => {
      this.categories = categories;
    });
  }

  @Input()
  set id(taskId: number) {
    this.taskService.getTaskById(taskId).subscribe({
      next: (task) => {
      this.task = {
        name: task.name,
        categoryName: task.categoryName,
      } as TaskRequest;
      console.log(task);
      this.taskId = task.id;
    }, 
    error: () => this.taskId = null
  });
  }

  error() {
    alert("Oops! Something went wrong");
  }

  process() {
    if (this.taskId != null) {
      this.taskService.editTask(this.taskId, this.task).subscribe({
        next: () => {
        alert("Successfully edited task!");
        this.router.navigate(['']);
      }, 
      error: () => this.error()
    });
    } else {
      this.taskService.addTask(this.task).subscribe({
        next: () => {
        alert("Successfully added task!");
        this.router.navigate(['']);
      }, 
      error:() => this.error()
    });
    }
  }
}
