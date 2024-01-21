import { Component, Input } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { TaskService } from '../../service/task.service';
import { Task } from '../../modal/task';
import { Status } from '../../modal/status';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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

    constructor(private _taskService: TaskService, private router: Router, private toastr: ToastrService) { }

    isTaskFinished(taskStatus: Status): boolean {
        if (taskStatus === Status.FINISHED) {
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
                if (data.status === Status.FINISHED) {
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

    deleteTask(taskId: number): void {

        let url: string;

        this._taskService.getTask(taskId).subscribe(data => {
            this.task = data;
            if (data.status === Status.FINISHED) {
                url = "finished";
            } else {
                url = "unfinished";
            }
        });

        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this._taskService.deleteTask(taskId)
            .subscribe();

    }

}
