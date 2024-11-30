<?php

namespace App\Actions\Auth;

use App\Models\User;

class UpdateUserProfile
{
    public function handle(User $user, array $data): void
    {
        $user->update($data);
    }
}
