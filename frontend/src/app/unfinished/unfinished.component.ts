import { Component } from '@angular/core';
import { TaskListComponent } from "../components/task-list/task-list.component";
import { TaskService } from '../task.service';

@Component({
    selector: 'app-unfinished',
    standalone: true,
    templateUrl: './unfinished.component.html',
    styleUrl: './unfinished.component.css',
    imports: [TaskListComponent]
})

export class UnfinishedComponent {

    public tasks = []

    constructor(private _taskService: TaskService){}

    ngOnInit(){
        this._taskService.getTasks();
    }
}
