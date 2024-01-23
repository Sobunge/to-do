import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
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
      catchError(this.handleError<Task[]>("getTasks", []))
    );
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
    return this.http.get<Task[]>(this.url)
    .pipe(
      tap(_ => console.log("Getting tasks successfull")),
      catchError(this.handleError<Task[]>("getTasks", []))
    );
  }

  changeTaskToFinished(taskId: number): Observable<Task> {
    const url = this.taskUrl + "items/" + taskId + "/finished";
    return this.http.put<Task>(url, {}, this.httpOptions);
  }

  changeTaskToUnfinished(taskId: number): Observable<Task> {
    const url = this.taskUrl + "items/" + taskId + "/unfinished";
    return this.http.put<Task>(url, {}, this.httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    const url = this.taskUrl + "items";
    return this.http.post<Task>(url, task, this.httpOptions);
  }

  deleteTask(taskId: number): Observable<Task> {
    const url = this.taskUrl + "items/" + taskId;
    return this.http.delete<Task>(url, this.httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      /*this.message = new Message(`${operation} failed: ${error.message}`, "danger");
      this.messageService.triggerToast(this.message);*/

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}