import { Component, Input } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {

  task: Task = {} as Task;

  constructor(private taskService: TaskService) {
  }

  @Input()
set id(taskId: number) {
  this.taskService.getTaskById(taskId).subscribe(task => {
    this.task = task;
  });
}
}
