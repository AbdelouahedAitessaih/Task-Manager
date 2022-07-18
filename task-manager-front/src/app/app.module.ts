import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskScreenComponent } from './screen/task-screen/task-screen.component';
import { RouterModule } from '@angular/router';
import { NewTaskGroupComponent } from './screen/new-task-group/new-task-group.component';
import { NewTaskComponent } from './screen/new-task/new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskScreenComponent,
    NewTaskGroupComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
