import { Component } from '@angular/core';
import { TaskListComponent } from "../components/task-list/task-list.component";
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
    selector: 'app-unfinished',
    standalone: true,
    templateUrl: './unfinished.component.html',
    styleUrl: './unfinished.component.css',
    imports: [TaskListComponent]
})

export class UnfinishedComponent {

    public tasks: Task[] = [];

    constructor(private _taskService: TaskService) { }

    ngOnInit() {
        this.tasks = this._taskService.getTasks();
    }
}
