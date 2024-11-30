<?php

namespace App\Http\Controllers;

use App\Actions\Auth\UpdateUserProfile;
use App\Http\Requests\UpdateUserProfileRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserProfileController extends Controller
{
    public function edit()
    {
        return Inertia::render('auth/profile');
    }

    public function update(UpdateUserProfileRequest $request, UpdateUserProfile $updateUserProfile)
    {
        $updateUserProfile->handle($request->user(), $request->validated());

        return redirect()->route('profile.edit');
    }
}
