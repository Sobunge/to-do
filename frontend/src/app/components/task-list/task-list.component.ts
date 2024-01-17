import { Component, Input } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { TaskService } from '../../task.service';
import { Task } from '../../task';

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css',
    imports: [FooterComponent, NavbarComponent, NgFor, NgIf]
})

export class TaskListComponent {

    @Input() tasks: Task[] = [];
    public task: Task | undefined;

    constructor(private _taskService: TaskService) { }

    isTaskFinished(taskStatus: string): boolean {
        if (taskStatus === 'FINISHED') {
            return true;
        } else {
            return false;
        }
    }

    getTask(taskId: number): void {
        this._taskService.getTask(taskId)
            .subscribe(data => this.task = data);
    }

    toggleTaskCompletionButton(taskId: number): void {

        this._taskService.getTask(taskId)
            .subscribe(data => {
                if (data.status === "FINISHED") {
                    this._taskService.changeTaskToUnfinished(taskId)
                        .subscribe(() => this._taskService.getFinishedTasks()
                            .subscribe(data => this.tasks = data));
                } else {
                    this._taskService.changeTaskToFinished(taskId)
                        .subscribe(() => this._taskService.getUnfinishedTasks()
                            .subscribe(data => this.tasks = data));
                }
            });

    }

}
