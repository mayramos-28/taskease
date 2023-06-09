<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    private function filter($request)
    {
        $where = [];

        if ($request->has('user_id') && $request->get('user_id')) {
            $where[] = ['user_id', '=', $request->get('user_id')];
        }
        if ($request->has('category_id') && $request->get('category_id')) {
            $where[] = ['category_id', '=', $request->get('category_id')];
        }
        if ($request->has('status') && $request->get('status')) {
            $where[] = ['status', '=', $request->get('status')];
        }

        return $where;
    }

    public function index(Request $request)
    {
        $where = $this->filter($request);
        $message = 'Lista de tareas obtenida correctamente';
        if (empty($where)) {
            $tasks = Task::all();
            return response()->json(
                [
                    'status' => 'success',
                    'message' =>  $message,
                    'taks' => $tasks,
                ],
                200
            );
        }

        $tasks = Task::where($where)->get();
        return response()->json(
            [
                'status' => 'success',
                'message' =>  $message,
                'tasks' => $tasks,
            ],
            200
        );
    }
    public function createdUser(Request $request)
    {
        $user = Auth::user();
        $where = ['user_id' => $user->id];
        $where = array_merge($where, $this->filter($request));
        $tasks = Task::where($where)->get();
        $message = 'Lista de tareas creadas obtenida correctamente';

        return response()->json([
            'status' => 'success',
            'message' => $message,
            'tasks' => $tasks,
        ], 200);
    }

    public function assignedUsers(Request $request)
    {
        $tasks = Task::where('user_id', $request->get('user_id'))->with('assignedUsers')->get();
        $message = 'Lista de tareas asignadas obtenida correctamente';
        return response()->json(
            [
                'status' => 'success',
                'message' =>  $message,
                'tasks' => $tasks,
            ],
            200
        );
    }

    public function show(int $id)
    {
        $task = Task::find($id);
        $message = 'Tarea obtenida correctamente';
        return response()->json(
            [
                'status' => 'success',
                'message' =>  $message,
                'task' => $task,
            ],
            200
        );
    }
    public function update(Request $request, int $id)
    {
        $task = Task::find($id);
        $task->update($request->all());
        $message = 'Tarea actualizada correctamente';
        return response()->json(
            [
                'status' => 'success',
                'message' =>  $message,
                'task' => $task,
            ],
            200
        );
    }

    public function store(Request $request)
    {
        $task = Task::create($request->all());
        $message = 'Tarea creada correctamente';
        return response()->json(
            [
                'status' => 'success',
                'message' =>  $message,
                'task' => $task,
            ],
            200
        );
    }

    public function delete(int $task)
    {
        $task = Task::find($task);
        $task->delete();
        $message = 'Tarea eliminada correctamente';
        return response()->json(
            [
                'status' => 'success',
                'message' =>  $message,
            ],
            200
        );
    }
}
