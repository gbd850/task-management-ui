import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../task';
import { catchError, of } from 'rxjs';
import { TaskRequest } from '../taskRequest';
import { TaskGroup } from '../task/taskGroup';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  getTaskList() {
    return this.http.get<TaskGroup[]>('http://localhost:8080/api/task');
  }

  getTaskById(id: number) {
    return this.http.get<Task>('http://localhost:8080/api/task/' + String(id));
  }

  resolveTask(id: number, resolve: boolean) {
    let body = { isResolved: resolve } as TaskRequest;
    return this.http.patch<Task>('http://localhost:8080/api/task/' + String(id), body);
  }

  deleteTask(id: number) {
    return this.http.delete('http://localhost:8080/api/task/' + String(id))
  }
}
