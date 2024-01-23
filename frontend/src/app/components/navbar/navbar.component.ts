import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class NavbarComponent {

  url: string = this.router.url;
  addTaskForm: FormGroup;
  @Input() tasks: Task[] = [];
  message: Message = new Message();
  @Output() returnTasks: EventEmitter<Task[]> = new EventEmitter();

  constructor(private _taskService: TaskService, private router: Router, private fb: FormBuilder, private messageService: MessageService) {
    this.addTaskForm = this.fb.group({
      name: ['']
    });
  }

  addTask(): void {

    const input: Task = this.addTaskForm.value;
    this.url = this.router.url;

    let task: Task = {
      id: 0,
      name: input.name,
      status: Status.UNFINISHED
    }

    this._taskService.addTask(task)
      .subscribe(data => {
        if (this.url === "/unfinished") {
          this.tasks.push(data);
          this.returnTasks.emit(this.tasks);
        }
        this.message = new Message(data.name + " saved successfully", "success");
        this.triggerToast();
      });

  }

  triggerToast() {
    this.messageService.triggerToast(this.message);
  }

}
