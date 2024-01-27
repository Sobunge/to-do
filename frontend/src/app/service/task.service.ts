import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { Task } from '../modal/task';
import { MessageService } from './message.service';
import { Message } from '../modal/message';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl: string = "http://localhost:8080/api/"
  public message: Message = new Message();
  public url: string;

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.url = "";
  }

  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    )
  };

  getTasks(): Observable<Task[]> {
    this.url = this.taskUrl + "items";
    return this.http.get<Task[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTask(taskId: number): Observable<Task> {
    this.url = this.taskUrl + "items/" + taskId;
    return this.http.get<Task>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getFinishedTasks(): Observable<Task[]> {
    this.url = this.taskUrl + "items/finished";
    return this.http.get<Task[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUnfinishedTasks(): Observable<Task[]> {
    this.url = this.taskUrl + "items/unfinished";
    return this.http.get<Task[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  changeTaskToFinished(taskId: number): Observable<Task> {
    this.url = this.taskUrl + "items/" + taskId + "/finished";
    return this.http.put<Task>(this.url, {}, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  changeTaskToUnfinished(taskId: number): Observable<Task> {
    this.url = this.taskUrl + "items/" + taskId + "/unfinished";
    return this.http.put<Task>(this.url, {}, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  addTask(task: Task): Observable<Task> {
    this.url = this.taskUrl + "items";
    return this.http.post<Task>(this.url, task, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  editTask(task: Task): Observable<Task> {
    this.url = this.taskUrl + "item/" + task.id;
    return this.http.put<Task>(this.url, task, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTask(taskId: number): Observable<Task> {
    this.url = this.taskUrl + "items/" + taskId;
    return this.http.delete<Task>(this.url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 404) {
      console.error('Resource not found. Handle the error here.');
      // You can perform additional actions or show a user-friendly message.
    } else {
      console.error('An error occurred:', error.error.message || error.statusText);
    }

    // Return an observable with a detailed error message
    return throwError(() => `Error: ${error.status} - ${error.statusText || 'Unknown error'}`);
  }

}