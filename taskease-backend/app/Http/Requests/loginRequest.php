<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class loginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    
    public function rules()
    {
        return [
            'email' => 'required',
            'password' => 'required'
        ];
    }
    public function loginAccreditation()
    {
        $name= $this->get('name');

        if ($this->isEmail($name)) {
            return [
                'email' => $name,
                'password' => $this->get('password')
            ];
        }
        return $this->only('name', 'password');
    }


    public function isEmail($value)
    {
        $valid = $this->container->make(ValidationFactory::class);
        return !$valid->make(['name' => $value], ['name' => 'email'])->fails();
    }
}
