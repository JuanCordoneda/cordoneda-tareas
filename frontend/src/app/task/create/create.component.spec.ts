import { Component, OnInit } from '@angular/core';
import { Task } from '../task';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  task: Task = { // Creamos una nueva instancia de Task con sus propiedades
    id: 0,
    title: '',
    description: '',
    status: '',
    created_at: '',
    updated_at: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  createTask(): void {
    console.log('Creando una nueva tarea:', this.task);
  }
}
