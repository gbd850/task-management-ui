import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TaskService } from '../service/task.service';
import { CategoryRequest } from '../categoryRequest';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  category: CategoryRequest = {
    name: null
  }

  constructor(private taskService: TaskService, private router: Router) {
  }

  process() {
    this.taskService.addCategory(this.category).subscribe({
      next: () => {
        alert("Successfully added category!");
        this.router.navigate(['']);
      },
      error: () => alert("Oops! Something went wrong")
    })
  }

}
