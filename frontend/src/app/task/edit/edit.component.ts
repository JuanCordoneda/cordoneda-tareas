import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Task } from '../task';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup; // Declaración de la propiedad form

  id: number = 0;
  task: Task = {} as Task;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Inicializar el formulario con validadores
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    // Obtener el ID de la tarea de los parámetros de la ruta
    this.id = this.route.snapshot.params['idTask'];

    // Obtener los detalles de la tarea y mostrarlos en el formulario
    this.taskService.find(this.id).subscribe(
      (data: Task) => {
        this.task = data;
        this.form.patchValue({
          title: this.task.title,
          description: this.task.description,
          status: this.task.status
        });
      },
      (error) => {
        console.error('Error retrieving task details:', error);
      }
    );
  }

  // Actualizar la tarea
  updateTask(): void {
    if (this.form.valid) {
      const updatedTask: Task = {
        id: this.id,
        title: this.form.value.title,
        description: this.form.value.description,
        status: this.form.value.status,
        created_at: this.task.created_at,
        updated_at: new Date().toString()
      };

      this.taskService.update(this.id, updatedTask).subscribe(
        () => {
          console.log('Task updated successfully!');
          this.router.navigate(['/tasks']);
        },
        (error) => {
          console.error('Error updating task:', error);
        }
      );
    }
  }

  // Enviar el formulario
  submit() {
    console.log(this.form.value);
    const taskId = this.route.snapshot.params['idTask'];
    console.log(taskId)
    this.taskService.update(taskId, this.form.value).subscribe(res => {
      console.log('Tarea actualizada!');
      this.router.navigateByUrl('task/index');
    });
  }
}
