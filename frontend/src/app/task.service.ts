import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl: string = "http://localhost:8080/api/"
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type':'application/json'}
    )
  };

  getTasks(): Observable<Task[]> {
    const url = this.taskUrl + "items";
    return this.http.get<Task[]>(url);
  }

  getTask(taskId: number): Observable<Task> {
    const url = this.taskUrl + "items/" + taskId;
    return this.http.get<Task>(url);
  }

  changeTaskToFinished(taskId: number): Observable<Task> {
    const url = this.taskUrl + "items/" + taskId + "/finished";
    return this.http.put<Task>(url, {}, this.httpOptions);
  }

  changeTaskToUnfinished(taskId: number): Observable<Task> {
    const url = this.taskUrl + "items/" + taskId + "/unfinished";
    return this.http.put<Task>(url, {}, this.httpOptions);
  }
}