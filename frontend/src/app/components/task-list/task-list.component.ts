import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { TaskService } from '../../task.service';

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css',
    imports: [FooterComponent, NavbarComponent, NgFor]
})

export class TaskListComponent {

    public tasks: Task[] = [];
    const task = new Task();

    constructor(private _taskService: TaskService) { }

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

    changeTaskToFinished(taskId: number): void {
        this._taskService.changeTaskToFinished(taskId)
            .subscribe(() => this.getTasks());
    }

    changeTaskToUnfinished(taskId: number): void {
        this._taskService.changeTaskToUnfinished(taskId)
            .subscribe(() => this.getTasks());
    }

    handleCheckBoxClick(id: number) {
        this.getTask(id);
        alert("Your task is: " + this.task);
       /* if (this.task?.status == "FINISHED") {
            alert("goal");
            //this.changeTaskToUnfinished(id);
        } else {
            alert("no goal");
            //this.changeTaskToFinished(id);
        }*/
        /*
          if (this.tasks[id].status == "finished") {
              this.tasks[id].status = "unfinished"
          } else {
              this.tasks[id].status = "finished"
          }
          */
    }

}
