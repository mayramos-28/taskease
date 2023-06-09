<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{

    public function index()
    {
        $users = User::all();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Lista de usuarios obtenida correctamente',
                'users' => $users,
            ],
            200
        );
    }

    public function show(int $id)
    {
        $user = User::find($id);
        if ($user) {
            return response()->json(
                [
                    'status' => 'success',
                    'message' => 'Usuario obtenido correctamente',
                    'user' => $user,
                ],
                200
            );
        } else {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Usuario no encontrado',
                ],
                404
            );
        }
    }
    public function update(Request $request, int $id)
    {
        $user = User::find($id);

        $user->update($request->all());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Usuario actualizado correctamente',
                'user' => $user,
            ],
            200
        );
    }
    public function assignTask(Request $request, $taskId)
    {
        $task = Task::findOrFail($taskId);
        $userIds = $request->input('user_ids', []);

        foreach ($userIds as $userId) {
            $user = User::findOrFail($userId);

            if ($task->assignedUsers->contains($user)) {
                return response()->json(['message' => 'El usuario ya está asignado a esta tarea.'], 400);
            }

            $task->assignedUsers()->attach($user);
        }

        return response()->json(['message' => 'Tarea asignada correctamente.'], 200);
    }
    public function unassignTask(Request $request, $taskId, $userId)
    {
        $task = Task::findOrFail($taskId);
        $user = User::findOrFail($userId);

        if (!$task->assignedUsers->contains($user)) {
            return response()->json(['message' => 'El usuario no está asignado a esta tarea.'], 400);
        }

        $task->assignedUsers()->detach($user);
        return response()->json(['message' => 'Tarea desasignada correctamente.'], 200);
    }
}
