import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-screen',
  templateUrl: './task-screen.component.html',
  styleUrls: ['./task-screen.component.css']
})
export class TaskScreenComponent implements OnInit {

  taskGroups : any[] = [];
  tasks : any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
