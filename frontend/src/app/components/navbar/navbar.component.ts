import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { Task } from '../../modal/task';
import { Status } from '../../modal/status';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public tasks: Task[] = [];
  addTaskForm: FormGroup;

  constructor(private _taskService: TaskService, private router: Router, private fb: FormBuilder) {
    this.addTaskForm = this.fb.group({
      name: ['']
    });
  }

  addTask(): void {

    const input: Task = this.addTaskForm.value;
    let task: Task = {
      id: 0,
      name: input.name,
      status: Status.UNFINISHED
    };

    this._taskService.addTask(task)
      .subscribe(() => {
        this.router.navigate(['unfinished']).then(() => {
          window.location.reload();
        });
      });

  }

}
