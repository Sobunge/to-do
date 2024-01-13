import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private getAllTasksUrl: string = "http://localhost:8080/api/items"
  private getTaskUrl: string = "http://localhost:8080/api/items/";
  private updateTaskStatusToFinishedUrl: string = "http://localhost:8080/api/items/{toDoItemId}/finished";
  private updateTaskStatusToUnFinishedUrl: string = "http://localhost:8080/api/items/{toDoItemId}/unfinished";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type':'application/json'}
    )
  };

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.getAllTasksUrl);
  }

  getTask(taskId: number): Observable<Task> {
    return this.http.get<Task>(this.getTaskUrl + taskId);
  }

  changeTaskToFinished(): Observable<Task> {
    return this.http.put<Task>(this.updateTaskStatusToFinishedUrl, undefined);
  }

  changeTaskToUnfinished(): Observable<Task> {
    return this.http.put<Task>(this.updateTaskStatusToUnFinishedUrl, undefined);
  }
}