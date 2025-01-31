import { Routes } from '@angular/router';
import { TaskDetailsComponent } from './task/task-details/task-details.component';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task/task.component';
import { CategoryComponent } from './task/category/category.component';

export const routes: Routes = [
  { path: '', component: TaskComponent },
  { path: 'addtask', component: TaskDetailsComponent },
  { path: 'edittask/:id', component: TaskDetailsComponent },
  { path: 'addcategory', component: CategoryComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
