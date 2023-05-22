<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Validation\ValidationException;

class TaskController extends Controller
{
    /**
     * Obtiene todas las tareas.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAll()
    {
        try {
            // Obtener todas las tareas
            $tasks = Task::get();

            return response()->json($tasks, 200);
        } catch (\Exception $e) {
            // Capturar cualquier excepción y devolver una respuesta de error genérica
            return response()->json([
                'error' => 'Error retrieving tasks'
            ], 500);
        }
    }

    /**
     * Crea una nueva tarea.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {
        try {
            // Obtener los datos de los parámetros de la URL
            $title = $request->query('title');
            $description = $request->query('description');
            $status = $request->query('status');

            // Validar los campos de entrada
            $validatedData = $request->validate([
                'title' => 'required',
                'description' => 'required',
                'status' => 'required',
            ]);

            // Crear la tarea con los datos obtenidos
            $task = Task::create([
                'title' => $title,
                'description' => $description,
                'status' => $status
            ]);

            return response()->json([
                'message' => 'Task created successfully',
                'task' => $task
            ], 200);
        } catch (ValidationException $e) {
            // Capturar la excepción de validación y devolver los errores de validación
            return response()->json([
                'error' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            // Capturar cualquier excepción y devolver una respuesta de error genérica
            return response()->json([
                'error' => 'Error creating task'
            ], 500);
        }
    }

    /**
     * Elimina una tarea por su ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        try {
            // Buscar la tarea por su ID y eliminarla
            $task = Task::findOrFail($id);
            $task->delete();

            return response()->json([
                'message' => 'Task deleted successfully'
            ], 200);
        } catch (ModelNotFoundException $e) {
            // Capturar la excepción de modelo no encontrado y devolver un mensaje de error
            return response()->json([
                'error' => 'Task not found'
            ], 404);
        } catch (\Exception $e) {
            // Capturar cualquier excepción y devolver una respuesta de error genérica
            return response()->json([
                'error' => 'Error deleting task'
            ], 500);
        }
    }

    /**
     * Obtiene una tarea por su ID.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function get($id)
    {
        try {
            // Buscar la tarea por su ID
            $task = Task::findOrFail($id);

            return response()->json($task, 200);
        } catch (ModelNotFoundException $e) {
            // Capturar la excepción de modelo no encontrado y devolver un mensaje de error
            return response()->json([
                'error' => 'Task not found'
            ], 404);
        } catch (\Exception $e) {
            // Capturar cualquier excepción y devolver una respuesta de error genérica
            return response()->json([
                'error' => 'Error retrieving task'
            ], 500);
        }
    }

    /**
     * Actualiza una tarea por su ID.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        try {
            // Validar los campos de entrada
            $validatedData = $request->validate([
                'title' => 'required',
                'description' => 'required',
                'status' => 'required',
            ]);

            // Buscar la tarea por su ID y actualizarla con los datos del request
            $task = Task::findOrFail($id);
            $task->update($request->all());

            return response()->json([
                'message' => 'Task updated successfully',
                'task' => $task
            ], 200);
        } catch (ModelNotFoundException $e) {
            // Capturar la excepción de modelo no encontrado y devolver un mensaje de error
            return response()->json([
                'error' => 'Task not found'
            ], 404);
        } catch (ValidationException $e) {
            // Capturar la excepción de validación y devolver los errores de validación
            return response()->json([
                'error' => 'Validation failed',
                'errors' => $e->errors()
            ], 422);
        } catch (\Exception $e) {
            // Capturar cualquier excepción y devolver una respuesta de error genérica
            return response()->json([
                'error' => 'Error updating task'
            ], 500);
        }
    }
}
