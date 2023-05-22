<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login', 'AuthController@login');

// Ruta para obtener el usuario autenticado (requiere autenticación)
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Rutas relacionadas con las tareas
Route::prefix('tasks')->group(function () {
    // Ruta para obtener todas las tareas
    Route::get('/', [TaskController::class, 'getAll'])->name('tasks.getAll'); // Obtiene todas las tareas

    // Ruta para crear una nueva tarea
    Route::post('/', [TaskController::class, 'create'])->name('tasks.create'); // Crea una nueva tarea

    // Ruta para eliminar una tarea por su ID
    Route::delete('/{id}', [TaskController::class, 'delete'])->name('tasks.delete'); // Elimina una tarea por su ID

    // Ruta para obtener una tarea por su ID
    Route::get('/{id}', [TaskController::class, 'get'])->name('tasks.get'); // Obtiene una tarea por su ID

    // Ruta para actualizar una tarea por su ID
    Route::put('/{id}', [TaskController::class, 'update'])->name('tasks.update'); // Actualiza una tarea por su ID
});