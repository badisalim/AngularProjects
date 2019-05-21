import { Component, OnInit } from '@angular/core';
import { Task } from '../basket/task';

@Component({
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Array<Task> = [{ name: 'Eat', description: '', type: 'event', progress: 50 }];
  constructor() { }

  ngOnInit() { }

  addTaskToList(task: Task) {
    this.tasks.push(task);
  }

  applyColor(number) {
    switch (true) {
      case (number <= 25):
        return { "background-color": "red" };
      case (number <= 50 && number > 25):
        return {
          "background-color": "violet"
        };
      case (number > 50 && number <= 75):
        return { "background-color": "blue" };
      case (number > 75):
        return {
          "background-color": "green"
        };
    }
  }

  changeProgress(index, number) {
    console.log(index, number);
    this.tasks[index].progress = number;
  }
}