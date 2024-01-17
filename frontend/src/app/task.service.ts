import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl: string = "http://localhost:8080/api/"

  public url: string;

  constructor(private http: HttpClient) {
    this.url = "";
  }

  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    )
  };

  getTasks(): Observable<Task[]> {
    this.url = this.taskUrl + "items";
    return this.http.get<Task[]>(this.url);
  }

  getTask(taskId: number): Observable<Task> {
    this.url = this.taskUrl + "items/" + taskId;
    return this.http.get<Task>(this.url);
  }

  getFinishedTasks(): Observable<Task[]> {
    this.url = this.taskUrl + "items/finished";
    return this.http.get<Task[]>(this.url);
  }

  getUnfinishedTasks(): Observable<Task[]> {
    this.url = this.taskUrl + "items/unfinished";
    return this.http.get<Task[]>(this.url);
  }

  changeTaskToFinished(taskId: number): Observable<Task> {
    const url = this.taskUrl + "items/" + taskId + "/finished";
    return this.http.put<Task>(url, {}, this.httpOptions);
  }

  changeTaskToUnfinished(taskId: number): Observable<Task> {
    const url = this.taskUrl + "items/" + taskId + "/unfinished";
    return this.http.put<Task>(url, {}, this.httpOptions);
  }

  addTask(name: string): Observable<Task> {
    const url = this.taskUrl + "items";
    return this.http.post<Task>(url, name, this.httpOptions);
  }

}