import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { Task } from '../../modal/task';
import { Status } from '../../modal/status';
import { MessageService } from '../../service/message.service';
import { Message } from '../../modal/message';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  public tasks: Task[] = [];
  addTaskForm: FormGroup;
  public message: Message | undefined;

  constructor(private _taskService: TaskService, private router: Router, private fb: FormBuilder, private messageService: MessageService) {
    this.addTaskForm = this.fb.group({
      name: ['']
    });
  }

  ngOnInit(): void {
    this.gettingAllUnFinishedTasks();
  }

  gettingAllUnFinishedTasks(): void {
    this._taskService.getUnfinishedTasks()
      .subscribe(data => this.tasks = data);
  }

  addTask(): void {

    const input: Task = this.addTaskForm.value;
    let task: Task = {
      id: 0,
      name: input.name,
      status: Status.UNFINISHED
    };

    this.messageService.successMessage("Task successfully saved");
  
    this._taskService.addTask(task)
      .subscribe(data => {
        this.tasks.push(data);
      });

  }

}
