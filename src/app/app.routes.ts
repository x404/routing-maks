import { Routes } from "@angular/router";
import { routes as userRoutes } from "./users/users.routes";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
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
    }
  },
//   {
//   path: 'tasks',
//   component: TasksComponent,
// }
]
