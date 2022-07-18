import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTaskGroupComponent } from './screen/new-task-group/new-task-group.component';
import { NewTaskComponent } from './screen/new-task/new-task.component';
import { TaskScreenComponent } from './screen/task-screen/task-screen.component';


const routes: Routes = [
  {path: '', component: TaskScreenComponent},
  {path: 'task-groups/:taskGroupId', component: TaskScreenComponent},
  {path: 'new-task-group', component: NewTaskGroupComponent},
  {path: 'task-groups/:taskGroupId/new-task', component: NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
