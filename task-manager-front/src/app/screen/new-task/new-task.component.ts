import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  taskGroupId:string="";

  constructor(private taskService : TaskService,
              private activatedRoute : ActivatedRoute,
              private router : Router) {
                this.activatedRoute.params.subscribe((params: Params) => {
                  this.taskGroupId = params.taskGroupId;
                });
               }

  ngOnInit() {
  }

  addNewTask(task : Task){
    if(task.title){
      this.taskService.createTask(this.taskGroupId,task).subscribe(() => {
        this.router.navigate(['../'], {relativeTo:this.activatedRoute});
      });
    }else{
      alert("Title can't be empty");
      return;
    }
  }

}
