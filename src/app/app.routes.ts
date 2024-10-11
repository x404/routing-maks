import { ActivatedRouteSnapshot, CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
// import { routes as userRoutes } from "./users/users.routes";

import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 1) {
    return true;
  }
  return new RedirectCommand(router.parseUrl('/unauthorized'));
}


export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'No task selected'
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    // children: userRoutes,
    loadChildren: () => import('./users/users.routes').then(module => module.routes),
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello World!',
    },
    resolve: {
      userName: resolveUserName
    },
    title: resolveTitle
  },
  {
    path: '**',
    component: NoTaskComponent
  }

//   {
//   path: 'tasks',
//   component: TasksComponent,
// }
]
