import { Routes } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserComponent } from "./users/user/user.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
  },
//   {
//   path: 'tasks',
//   component: TasksComponent,
// }
]
