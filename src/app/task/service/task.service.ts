import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../task';
import { catchError, of } from 'rxjs';
import { TaskRequest } from '../taskRequest';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  getTaskList() {
    return this.http.get<Task[]>('http://localhost:8080/api/task');
  }

  getTaskList$ = this.getTaskList().pipe(
    catchError((err) => {
      return of([])
    })
  )

  resolveTask(id: number, resolve: boolean) {
    let body = { isResolved: resolve } as TaskRequest;
    return this.http.patch<Task>('http://localhost:8080/api/task/' + String(id), body);
  }
}
