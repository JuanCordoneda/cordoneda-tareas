import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    // Configuración de TestBed para el módulo de pruebas
    TestBed.configureTestingModule({});
    
    // Inyección del servicio desde el TestBed
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    // Comprobación de que el servicio haya sido creado correctamente
    expect(service).toBeTruthy();
  });
});
