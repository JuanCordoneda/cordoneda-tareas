<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Inicio de sesión exitoso, generar token o realizar otras acciones
            $user = Auth::user();
            $token = $user->createToken('access_token')->plainTextToken;

            return response()->json(['token' => $token], 200);
        } else {
            // Credenciales incorrectas, devolver error
            return response()->json(['message' => 'Credenciales inválidas'], 401);
        }
    }
}
