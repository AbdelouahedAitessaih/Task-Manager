import { Injectable } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { ApiConfigService } from '../api/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  ROUTE = 'taskgroups';
  constructor(private apiConfig: ApiConfigService) { }

  getAllTasks(taskGroupId: string) {
    return this.apiConfig.get(`${this.ROUTE}/${taskGroupId}/tasks`);
  }

  getTask(taskGroupId: string, taskId: string) {
    return this.apiConfig.get(`${this.ROUTE}/${taskGroupId}/tasks/${taskId}`);
  }

  createTask(taskGroupId: string, data: Task){
    return this.apiConfig.post(`${this.ROUTE}/${taskGroupId}/tasks`, data);
  }

  updateTask(taskGroupId: string, taskId: string, data: Task){
    return this.apiConfig.put(`${this.ROUTE}/${taskGroupId}/tasks/${taskId}`, data);
  }

  deleteTask(taskGroupId: string, taskId: string) {
    return this.apiConfig.delete(`${this.ROUTE}/${taskGroupId}/tasks/${taskId}`);
  }
}
