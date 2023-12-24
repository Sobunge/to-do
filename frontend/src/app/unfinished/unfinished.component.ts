import { Component } from '@angular/core';
import { TaskListComponent } from "../components/task-list/task-list.component";

@Component({
    selector: 'app-unfinished',
    standalone: true,
    templateUrl: './unfinished.component.html',
    styleUrl: './unfinished.component.css',
    imports: [TaskListComponent]
})

export class UnfinishedComponent {

}
