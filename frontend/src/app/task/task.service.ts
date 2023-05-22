import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = "http://127.0.0.1:8000/api/tasks";

  // Opciones HTTP para el encabezado de la solicitud
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }
 
  // Obtiene todos los registros de tareas
  getAll(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiURL)
      .pipe(
        catchError(this.handleError) // Manejo de errores
      );
  }

  // Crea una nueva tarea
  create(task: Task): Observable<Task> {
    const params = new HttpParams()
      .set('title', task.title)
      .set('description', task.description)
      .set('status', task.status);

    const urlWithParams = `${this.apiURL}?${params.toString()}`;

    return this.httpClient.post<Task>(urlWithParams, JSON.stringify(task), this.httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          // Manejo de errores
          console.log('Error en la solicitud:', error);
          return throwError(error); // Relanza el error
        })
      );
  }

  // Obtiene los detalles de una tarea por su ID
  find(id: number): Observable<Task> {
    return this.httpClient.get<Task>(this.apiURL +'/'+ id)
      .pipe(
        catchError(this.handleError) // Manejo de errores
      );
  }

  // Actualiza los detalles de una tarea por su ID
  update(id: number, task: Task): Observable<Task> {
    const params = new HttpParams()
      .set('title', task.title)
      .set('description', task.description)
      .set('status', task.status);

    const urlWithParams = `${this.apiURL}/${id}?${params.toString()}`;

    return this.httpClient.put<Task>(urlWithParams + id, JSON.stringify(task), this.httpOptions)
      .pipe(
        catchError(this.handleError) // Manejo de errores
      );
  }

  // Elimina una tarea por su ID
  delete(id: number): Observable<Task> {
    return this.httpClient.delete<Task>(this.apiURL +'/'+ id, this.httpOptions)
      .pipe(
        catchError(this.handleError) // Manejo de errores
      );
  }

  // Función para manejar los errores de la solicitud HTTP
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = error.error.message;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
