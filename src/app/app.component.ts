import { Component } from '@angular/core';
import { TaskModel } from './task.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // array to store the tasks
  private taskList: TaskModel[] = new Array(); 
  private task= new TaskModel();

  // adds tasks to the taskList
  private addTask():void{
    console.log(JSON.stringify(this.task));
    this.taskList.push(this.task);
    this.task = new TaskModel();
  }
}
