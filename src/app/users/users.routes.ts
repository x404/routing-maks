import { Routes } from '@angular/router';

import { canLeaveEditPage, NewTaskComponent } from '../tasks/new-task/new-task.component';
import { resolveUserTasks, TasksComponent } from "../tasks/tasks.component";
import { TasksService } from "../tasks/tasks.service";

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService ],
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks', // <your-domain>/users/<uid>/tasks
        component: TasksComponent,
        // loadComponent: () => import('../tasks/tasks.component').then(m => m.TasksComponent),
        // runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        runGuardsAndResolvers: 'always',
        resolve: {
          userTasks: resolveUserTasks,
        },
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage]
      },
    ]
  }
];
