<?php

namespace App\Http\Controllers\Auth;

use App\Actions\Auth\RegisterUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterUserRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('auth/register');
    }

    public function store(RegisterUserRequest $request, RegisterUser $registerUser)
    {
        $user = $registerUser->handle($request->validated());

        $request->session()->regenerate();

        Auth::login($user);

        return redirect()->route('dashboard');
    }
}
