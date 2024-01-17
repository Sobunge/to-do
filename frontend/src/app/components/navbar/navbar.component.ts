import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Task } from '../../modal/task';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private _taskService: TaskService){}

  public name: string = "";

  addTask(): void{
    alert("Name: " + this.name);
  }

}
