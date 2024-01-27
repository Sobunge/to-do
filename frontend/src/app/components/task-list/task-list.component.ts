import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
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
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-task-list',
    standalone: true,
    templateUrl: './task-list.component.html',
    styleUrl: './task-list.component.css',
    imports: [FooterComponent, NavbarComponent, NgFor, NgIf, MessageComponent, FormsModule, ReactiveFormsModule]
})

export class TaskListComponent {

    public url: string = "";
    @Input() tasks: Task[] = [];
    public task: Task | undefined;
    public message: Message = new Message();
    editTaskForm: FormGroup;
    @ViewChild('exampleModal') exampleModal!: ElementRef;
    recipient: string = "";

    constructor(private _taskService: TaskService, private router: Router, private fb: FormBuilder, public messageService: MessageService) {
        this.editTaskForm = this.fb.group({
            id: [''],
            name: ['']
        });
    }

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

    openEditTaskModal(task: Task): void {
        this.editTaskForm.setValue({
            id: task.id,
            name: task.name
        });
    }

    submitEditedTask() {

        this.url = this.router.url;
        const input: Task = this.editTaskForm.value;

        this._taskService.getTask(input.id)
            .subscribe(data => {
                if (input.name !== data.name) {
                    this.task = {
                        id: input.id,
                        name: input.name,
                        status: data.status
                    };

                    this._taskService.editTask(this.task)
                        .subscribe(editedTask => {
                            const index = this.tasks.findIndex(i => i.id === editedTask.id);
                            if (index !== -1) {
                                this.tasks[index] = editedTask;
                            }
                            this.message = new Message("Task name changed successfully", "success");
                            this.messageService.triggerToast(this.message);
                        });
                } else {
                    this.message = new Message("Task name is the same as previous.", "warning");
                    this.messageService.triggerToast(this.message);
                }
            });

    }

    clearModal(): void {
        this.editTaskForm.reset(); // Reset edit task form when modal is closed
    }

}
