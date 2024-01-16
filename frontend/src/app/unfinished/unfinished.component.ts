import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-unfinished',
    standalone: true,
    templateUrl: './unfinished.component.html',
    styleUrl: './unfinished.component.css',
})

export class UnfinishedComponent implements OnInit {

    public tasks: Task[] = [];

    constructor(private _taskService: TaskService) { }

    getUnfinishedTasks(): void {
        this._taskService.getUnfinishedTasks()
            .subscribe(data => this.tasks = data);
    }

    ngOnInit(): void {
        this.getUnfinishedTasks();
    }

    changeTaskToUnFinished(taskId: number): void {
        this._taskService.changeTaskToFinished(taskId)
            .subscribe(() => this.getUnfinishedTasks());
    }

    finishTaskButton(id: number): void {

        this.changeTaskToUnFinished(id);

    }
}
