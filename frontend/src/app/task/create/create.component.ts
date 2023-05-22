import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // Definición del formulario y sus controles con validadores
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });

  constructor(
    public taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  // Inicialización del formulario
  initializeForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });
  }

  // Getter conveniente para acceder a los controles del formulario
  get f() {
    return this.form.controls;
  }

  // Maneja el envío del formulario
  submit() {
    console.log(this.form.value);
    this.taskService.create(this.form.value).subscribe(
      (res) => {
        console.log('Tarea creada!');
        this.router.navigateByUrl('task/index');
      },
      (error) => {
        console.log('Error en la solicitud:', error);
        console.log('URL final:', error.url);
      }
    );
  }
}
