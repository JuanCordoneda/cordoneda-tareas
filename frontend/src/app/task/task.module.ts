import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent], // Declaración de los componentes utilizados en este módulo
  imports: [
    CommonModule, // Importar CommonModule para utilizar directivas comunes como ngIf y ngFor
    TaskRoutingModule, // Importar el módulo de enrutamiento específico para las rutas de tareas
    FormsModule, // Importar FormsModule para trabajar con formularios de plantilla
    ReactiveFormsModule // Importar ReactiveFormsModule para trabajar con formularios reactivos
  ]
})
export class TaskModule { }
