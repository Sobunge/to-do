import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() {
    return [
      { "id": 1, "name": "Voting", "status": "finished" },
      { "id": 2, "name": "Eating", "status": "unfinished" },
      { "id": 3, "name": "Hicking", "status": "finished" },
      { "id": 4, "name": "Climbing", "status": "unfinished" }
    ];
  }
}
