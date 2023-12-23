import { Component } from '@angular/core';
import { TaskListComponent } from "../components/task-list/task-list.component";
import { FooterComponent } from "../components/footer/footer.component";
import { NavbarComponent } from "../components/navbar/navbar.component";

@Component({
    selector: 'app-finished',
    standalone: true,
    templateUrl: './finished.component.html',
    styleUrl: './finished.component.css',
    imports: [TaskListComponent, FooterComponent, NavbarComponent]
})
export class FinishedComponent {

}
