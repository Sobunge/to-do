import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor } from '@angular/common';
import { TaskService } from '../../task.service';
import { Task } from '../../task';

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css',
    imports: [FooterComponent, NavbarComponent, NgFor]
})

export class TaskListComponent {

    constructor(private _taskService: TaskService) { }

    isTaskFinished(taskStatus: string): boolean {
        if (taskStatus === 'FINISHED') {
            return true;
        } else {
            return false;
        }
    }

}
