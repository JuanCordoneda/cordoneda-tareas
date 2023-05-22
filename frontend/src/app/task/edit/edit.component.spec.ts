import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  // Configuración antes de cada prueba
  beforeEach(async () => {
    // Configura el entorno de pruebas
    await TestBed.configureTestingModule({
      declarations: [EditComponent] // Declaración del componente a probar
    }).compileComponents(); // Compila los componentes
  });

  beforeEach(() => {
    // Crea una instancia del componente y obtiene la instancia de ComponentFixture
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Realiza la detección de cambios
  });

  // Prueba para verificar la creación del componente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado correctamente
  });
});
