import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../task';
import { TaskRequest } from '../taskRequest';
import { TaskGroup } from '../taskGroup';
import { Category } from '../category';
import { CategoryRequest } from '../categoryRequest';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  getTaskList() {
    return this.http.get<TaskGroup[]>('http://localhost:8080/api/task');
  }

  getCategoryList() {
    return this.http.get<Category[]>('http://localhost:8080/api/task/category');
  }

  getTaskById(id: number) {
    return this.http.get<Task>('http://localhost:8080/api/task/' + String(id));
  }

  resolveTask(id: number, resolve: boolean) {
    let body = { isResolved: resolve } as TaskRequest;
    return this.http.patch<Task>('http://localhost:8080/api/task/' + String(id), body);
  }

  addTask(task: TaskRequest) {
    return this.http.post<Task>('http://localhost:8080/api/task', task);
  }

  editTask(taskId: number, task: TaskRequest) {
    return this.http.patch<Task>('http://localhost:8080/api/task/' + String(taskId), task);
  }

  deleteTask(id: number) {
    return this.http.delete('http://localhost:8080/api/task/' + String(id))
  }

  addCategory(category: CategoryRequest) {
    return this.http.post<Category>('http://localhost:8080/api/task/category', category);
  }
}
