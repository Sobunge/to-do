import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from "../components/task-list/task-list.component";
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-finished',
    standalone: true,
    templateUrl: './finished.component.html',
    styleUrl: './finished.component.css',
    imports: [TaskListComponent]
})
export class FinishedComponent implements OnInit {

    public tasks: Task[] = [];

    constructor(private _taskService: TaskService) { }

    getFinishedTasks(): void {
        this._taskService.getFinishedTasks()
            .subscribe(data => this.tasks = data);
    }

    ngOnInit(): void {
        this.getFinishedTasks();
    }
}
