import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { Task } from '../../task';
import { TaskService } from '../../task.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css',
    imports: [FooterComponent, NavbarComponent, NgFor]
})

export class TaskListComponent {

    public tasks: Task[] = [];
    public task: Task | undefined;

    constructor(private _taskService: TaskService) {}

    getTasks(): void {
        this._taskService.getTasks()
            .subscribe(data => this.tasks = data);
    }

    ngOnInit() {
        this.getTasks();
    }

    getTask(taskId: number): void {
        this._taskService.getTask(taskId)
        .subscribe(data => this.task = data);
    }

    handleCheckBoxClick(id: number) {
        this.getTask(id);
        if (this.task?.status == "FINISHED") {
            this._taskService.changeTaskToUnfinished;
        } else {
            this._taskService.changeTaskToFinished
        }
      /*
        if (this.tasks[id].status == "finished") {
            this.tasks[id].status = "unfinished"
        } else {
            this.tasks[id].status = "finished"
        }
        */
    }

}
