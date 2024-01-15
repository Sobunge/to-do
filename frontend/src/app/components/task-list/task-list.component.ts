import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor } from '@angular/common';
import { TaskService } from '../../task.service';
import { Task } from '../../task';

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css',
    imports: [FooterComponent, NavbarComponent, NgFor]
})

export class TaskListComponent implements OnInit {

    public task: Task | undefined;
    public tasks: Task[] = [];

    constructor(private _taskService: TaskService) { }

    getTasks(): void {
        this._taskService.getTasks()
            .subscribe(data => this.tasks = data);
    }

    ngOnInit() {
        this.getTasks();
    }

    changeTaskToFinished(taskId: number): void {
        this._taskService.changeTaskToFinished(taskId)
            .subscribe(() => this.getTasks());
    }

    changeTaskToUnfinished(taskId: number): void {
        this._taskService.changeTaskToUnfinished(taskId)
            .subscribe(() => this.getTasks());
    }

    isTaskFinished(taskStatus: string): boolean {
        if (taskStatus === 'FINISHED') {
            return true;
        } else {
            return false;
        }
    }

    handleButtonClick(id: number): void {

        this._taskService.getTask(id)
            .subscribe((data: Task) => {
                this.task = data;

                if (this.task?.status === "FINISHED") {
                    this.changeTaskToUnfinished(id);
                } else {
                    this.changeTaskToFinished(id);
                }
            });
    }

}
