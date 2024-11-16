<?php

namespace App\Actions\Auth;

use App\Models\Team;
use App\Models\User;

class RegisterUser
{
    public function handle(array $data): User
    {
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $team = Team::forceCreate([
            'owner_id' => $user->id,
            'name' => $user->name."'s Team",
            'personal_team' => true,
        ]);

        $user->teams()->attach($team, ['role' => 'owner']);

        $user->current_team_id = $team->id;

        $user->save();

        return $user;
    }
}
