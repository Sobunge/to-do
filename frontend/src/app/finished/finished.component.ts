import { Component } from '@angular/core';
import { TaskListComponent } from "../components/task-list/task-list.component";

@Component({
    selector: 'app-finished',
    standalone: true,
    templateUrl: './finished.component.html',
    styleUrl: './finished.component.css',
    imports: [TaskListComponent]
})
export class FinishedComponent {

}
