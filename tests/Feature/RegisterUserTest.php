<?php

use App\Actions\Auth\RegisterUser;
use Illuminate\Foundation\Testing\RefreshDatabase;


uses(RefreshDatabase::class);

test('Register user', function () {
    $userAction = new RegisterUser();

    $user = $userAction->handle([
        'name' => 'John Doe',
        'email' => 'johndoe@mail.test',
        'password' => 'password',
    ]);

    $this->assertDatabaseHas('users', [
        'email' => $user->email,
    ]);

    $this->assertDatabaseCount('teams', 1);

    expect($user->current_team_id)
        ->not()->toBeNull();
});
