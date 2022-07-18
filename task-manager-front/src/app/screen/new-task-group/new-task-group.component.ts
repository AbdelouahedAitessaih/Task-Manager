import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskGroup } from 'src/app/model/task-group.model';
import { TaskGroupService } from 'src/app/service/taskGroup/task-group.service';

@Component({
  selector: 'app-new-task-group',
  templateUrl: './new-task-group.component.html',
  styleUrls: ['./new-task-group.component.css']
})
export class NewTaskGroupComponent implements OnInit {

  constructor(private taskGroupService : TaskGroupService,
              private router : Router) { }

  ngOnInit() {
  }

  addNewTaskGroup(taskGroup : TaskGroup){
    if(taskGroup.title){
      this.taskGroupService.createTaskGroup(taskGroup).subscribe((tg) => {
        const data = JSON.parse(JSON.stringify(tg));
        this.router.navigate(['task-groups', data._id]);
      });
    }else{
      alert("Title can't be empty");
      return;
    }
  }

}
