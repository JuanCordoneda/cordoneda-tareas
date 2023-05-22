<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    // Especificar el nombre de la tabla asociada al modelo
    protected $table = 'task';

    // Especificar los campos que se pueden asignar masivamente
    protected $fillable = ['title', 'description', 'status'];
}
