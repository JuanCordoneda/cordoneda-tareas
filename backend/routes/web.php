<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

// Ruta de inicio
Route::get('/', function () {
    return view('welcome');
});
