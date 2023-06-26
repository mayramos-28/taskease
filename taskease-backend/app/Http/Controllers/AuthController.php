<?php

namespace App\Http\Controllers;

use App\Http\Requests\loginRequest;
use App\Http\Requests\registerRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(registerRequest $request)
    {
        $data = $request->validated();
        $data['password'] = password_hash($data['password'], PASSWORD_BCRYPT);
        $user = User::create($data);
        $user->save();
        $token = $user->createToken('auth_token')->accessToken;
        $message = 'Usuario creado correctamente';
        return response()->json(['message' => $message, 'token' => $token], 200);
    }

    public function login(loginRequest $request)
    {
        $data = $request->all();
        $user = User::where('email', $data['email'])->first();
        if ($user) {
            if (password_verify($data['password'], $user->password)) {
                $token = $user->createToken('auth_token')->plainTextToken;
                $message = 'Usuario logueado correctamente';
                return response()->json(['message' => $message, 'token' => $token, 'user_id'=>$user->id], 200);
            } else {
                $message = 'Contraseña incorrecta';
                return response()->json(['message' => $message], 401);
            }
        } else {
            $message = 'Usuario no encontrado';
            return response()->json(['message' => $message], 401);
        }
    }
    public function logout()
    {
        Auth::logout();          
        return response()->json('Cierre de sesión exitoso');
    }
}
