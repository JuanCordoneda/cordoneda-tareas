import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    // Configuración del módulo de pruebas
    await TestBed.configureTestingModule({
      declarations: [IndexComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    // Crear el componente y el fixture para realizar las pruebas
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Verificar que el componente se haya creado exitosamente
    expect(component).toBeTruthy();
  });
});
