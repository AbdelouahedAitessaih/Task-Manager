import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TaskGroup } from 'src/app/model/task-group.model';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task/task.service';
import { TaskGroupService } from 'src/app/service/taskGroup/task-group.service';

@Component({
  selector: 'app-task-screen',
  templateUrl: './task-screen.component.html',
  styleUrls: ['./task-screen.component.css']
})
export class TaskScreenComponent implements OnInit {

  taskGroups : TaskGroup[] = [];
  tasks : Task[] = [];

  taskGroupId : string = "";

  constructor(private taskGroupService : TaskGroupService,
              private taskService : TaskService,
              private activatedRoute : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.getAllTaskGroups();
    this.getAllTasks();
  }

  getAllTaskGroups(){
    this.taskGroupService.getAllTaskGroups().subscribe(list => {
      const data = JSON.parse(JSON.stringify(list));
      this.taskGroups = data;
      //this.router.navigate(['task-groups', this.taskGroups[0]._id]);
    });
  }

  deleteTaskGroup(taskGroup: TaskGroup){
    this.taskGroupService.deleteTaskGroup(taskGroup._id)
        .subscribe(() => {
          this.taskGroups = this.taskGroups.filter(t => t._id != taskGroup._id);
        });
  }

  getAllTasks(){
    this.activatedRoute.params.subscribe((params: Params)=> {
     this.taskGroupId = params.taskGroupId;
        if(this.taskGroupId){
          this.taskService.getAllTasks(this.taskGroupId).subscribe(list => {
            const data = JSON.parse(JSON.stringify(list));
            this.tasks = data;
          })
        }
    });
  }

  deleteTask(task: Task){
  this.taskService.deleteTask(this.taskGroupId, task._id)
      .subscribe(() => {
        this.tasks = this.tasks.filter(t => t._id != task._id);
      });
  }

  taskComplited(task: Task){
   this.taskService.updateTask(this.taskGroupId, task._id,{...task, completed: !task.completed}).subscribe(() => task.completed = !task.completed);
  }

  addTaskScreen() {
    if(this.taskGroupId){
      this.router.navigate(['./new-task'],{relativeTo:this.activatedRoute});
    }else{
      alert('Please select a task group !');
      return;
    }
  }

}
