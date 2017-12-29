import { Component } from '@angular/core';
import { TaskModel } from './task.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private taskList: TaskModel[] = new Array(); 
  private task= new TaskModel();

  private addTask():void{
    console.log(JSON.stringify(this.task));
    this.taskList.push(this.task);
    this.task = new TaskModel();
  }
}
