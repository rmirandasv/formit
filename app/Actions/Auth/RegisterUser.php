<?php

namespace App\Actions\Auth;

use App\Models\User;

class RegisterUser
{
    public function handle(array $data): User
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }
}
