import { Component, Input } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { TaskService } from '../../service/task.service';
import { Task } from '../../modal/task';
import { Status } from '../../modal/status';
import { Router } from '@angular/router';
import { Message } from '../../modal/message';
import { MessageService } from '../../service/message.service';
import { MessageComponent } from "../message/message.component";

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css',
    imports: [FooterComponent, NavbarComponent, NgFor, NgIf, MessageComponent]
})

export class TaskListComponent {

    @Input() tasks: Task[] = [];
    public task: Task | undefined;
    public message: Message = new Message();

    constructor(private _taskService: TaskService, private router: Router, public messageService: MessageService) { }

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
            .subscribe(task => {
                if (task.status === Status.FINISHED) {
                    this._taskService.changeTaskToUnfinished(taskId)
                        .subscribe(changedTask => {
                            this._taskService.getFinishedTasks()
                                .subscribe(tasks => this.tasks = tasks);
                            this.message = new Message(changedTask.name + " unfinished.", "success");
                            this.triggerToast();
                        });
                } else {
                    this._taskService.changeTaskToFinished(taskId)
                        .subscribe(changedTask => {
                            this._taskService.getUnfinishedTasks()
                                .subscribe(tasks => this.tasks = tasks);
                            this.message = new Message(changedTask.name + " finished.", "success");
                            this.triggerToast();
                        });
                }

            });

    }

    deleteTask(task: Task): void {

        this.message = new Message(task.name + " successfully deleted", "success");

        this.tasks = this.tasks.filter(toggledTask => toggledTask !== task);
        this._taskService.deleteTask(task.id)
            .subscribe(() => {
                this.triggerToast();
            });

    }

    handleMessageFromChild(message: Message) {
        this.message = message;
    }

    handleTasksFromChild(tasks: Task[]) {
        this.tasks = tasks;
    }

    triggerToast() {
        this.messageService.triggerToast(this.message);
    }

}
