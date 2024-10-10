import { Routes } from "@angular/router";
import { routes as userRoutes } from "./users/users.routes";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No task selected'
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    data: {
      message: 'Hello World!',
    },
    resolve: {
      userName: resolveUserName
    },
    title: resolveTitle
  },
//   {
//   path: 'tasks',
//   component: TasksComponent,
// }
]
