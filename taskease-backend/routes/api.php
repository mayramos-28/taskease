<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'auth'], function () {
    Route::post('/register', [AuthController::class, 'register']);    
    Route::post('/login', [AuthController::class, 'login']);    
    Route::post('/logout', [AuthController::class, 'logout']);})->middleware('auth:sanctum');



Route::group(['prefix' => 'tasks'], function(){
    Route::get('/index', [TaskController::class, 'index']);   
    Route::get('/show/{id}', [TaskController::class, 'show']);
    Route::post('/store', [TaskController::class, 'store']);
    Route::put('/update/{id}', [TaskController::class, 'update']);
    Route::delete('/delete/{id}', [TaskController::class, 'delete']);
    Route::get('/createdUser', [TaskController::class, 'createdUser']);
    Route::get('/assignedUsers', [TaskController::class, 'createdUser']);
})->middleware('auth:sanctum');

Route::group(['prefix' => 'users'], function(){
    Route::get('/index', [UserController::class, 'index']);   
    Route::get('/show/{id}', [UserController::class, 'show']);
    Route::put('/update/{id}', [UserController::class, 'update']);    
    Route::get('/assignedTasks', [UserController::class, 'assignedTasks']);
})->middleware('auth:sanctum');