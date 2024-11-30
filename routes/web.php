<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\FormFieldController;
use App\Http\Controllers\PublicFormController;
use App\Http\Controllers\UserProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::get('/register', [RegisterController::class, 'index'])->name('register');
Route::post('/register', [RegisterController::class, 'store']);
Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'login']);

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/forms', [FormController::class, 'index'])->name('forms');
    Route::post('/forms', [FormController::class, 'store']);
    Route::get('/forms/create', [FormController::class, 'create'])->name('forms.create');
    Route::get('/forms/{form}/edit', [FormController::class, 'edit'])->name('forms.edit');
    Route::post('/forms/{form}/settings', [FormController::class, 'updateSettings']);
    Route::put('/forms/{form}', [FormController::class, 'update']);
    Route::post('/forms/{form}/fields', [FormFieldController::class, 'store']);
    Route::delete('/forms/{form}/fields/{formField}', [FormFieldController::class, 'delete']);
    Route::put('/forms/{form}/fields/{formField}', [FormFieldController::class, 'update']);

    Route::get('/profile', [UserProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [UserProfileController::class, 'update']);
});

Route::get('/f/{form:slug}', [PublicFormController::class, 'show'])->name('public-forms.show');
Route::post('/f/{form:slug}', [PublicFormController::class, 'store']);
Route::get('/f/{form:slug}/thank-you', [PublicFormController::class, 'thankYou'])->name('public-forms.thank-you');
