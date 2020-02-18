import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  dataChange: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  dialogData: any;
  constructor (private httpClient: HttpClient) {}

  get data(): Task[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData; 
  }

  
  addIssue (issue: Task): void {
    this.dialogData = issue;
  }

  updateIssue (issue: Task): void {
    this.dialogData = issue;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }
}




