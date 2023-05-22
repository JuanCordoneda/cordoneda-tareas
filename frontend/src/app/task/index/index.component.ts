import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { Task } from '../task';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  tasks: Task[] = [];
 
  constructor(public taskService: TaskService) { }

  // Trae todos los datos al iniciar
  ngOnInit(): void {
    // Suscribe al método getAll() del servicio taskService para obtener todas las tareas
    this.taskService.getAll().subscribe(
      (data: Task[]) => {
        // Almacena los datos recibidos en la variable tasks
        this.tasks = data;
        // Muestra las tareas en la consola
        console.log(this.tasks);
      },
      (error) => {
        // En caso de error, muestra el mensaje de error en la consola
        console.error('Error retrieving tasks:', error);
      }
    );
  }

  // Elimina una tarea al hacer clic
  deleteTask(id: number): void {
    // Suscribe al método delete() del servicio taskService para eliminar una tarea
    this.taskService.delete(id).subscribe(
      () => {
        // Filtra la tarea eliminada de la lista de tareas utilizando su id
        this.tasks = this.tasks.filter((task) => task.id !== id);
        // Muestra un mensaje de éxito en la consola
        console.log('Task deleted successfully!');
      },
      (error) => {
        // En caso de error, muestra el mensaje de error en la consola
        console.error('Error deleting task:', error);
      }
    );
  }

}
