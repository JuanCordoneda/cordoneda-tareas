import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  // Redirige '/task' a '/task/index' de forma predeterminada
  { path: 'task', redirectTo: 'task/index', pathMatch: 'full' },
  
  // Ruta para mostrar la lista de tareas
  { path: 'task/index', component: IndexComponent },
  
  // Ruta para crear una nueva tarea
  { path: 'task/create', component: CreateComponent },
  
  // Ruta para editar una tarea existente
  { path: 'task/edit/:idTask', component: EditComponent } 
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
