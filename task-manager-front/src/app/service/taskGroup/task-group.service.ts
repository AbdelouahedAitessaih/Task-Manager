import { Injectable } from '@angular/core';
import { TaskGroup } from 'src/app/model/task-group.model';
import { ApiConfigService } from '../api/api-config.service';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupService {

  ROUTE = 'taskgroups';
  constructor(private apiConfig: ApiConfigService) { }

  getAllTaskGroups() {
    return this.apiConfig.get(this.ROUTE);
  }

  getTaskGroup(taskGroupId: string) {
    return this.apiConfig.get(`${this.ROUTE}/${taskGroupId}`);
  }

  createTaskGroup(data: TaskGroup) {
    return this.apiConfig.post(this.ROUTE, data);
  }

  updateTaskGroup(data: TaskGroup) {
    return this.apiConfig.put(this.ROUTE, data);
  }

  deleteTaskGroup(taskGroupId: string) {
    return this.apiConfig.delete(`${this.ROUTE}/${taskGroupId}`);
  }
}
