import { Component } from '@angular/core';
import { TaskListComponent } from "../components/task-list/task-list.component";
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
    selector: 'app-finished',
    standalone: true,
    templateUrl: './finished.component.html',
    styleUrl: './finished.component.css',
    imports: [TaskListComponent]
})
export class FinishedComponent {

    public tasks: Task[] = [];

    constructor(private _taskService: TaskService) { }

    ngOnInit() {
        this.tasks = this._taskService.getTasks();
    }
}
