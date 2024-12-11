<?php

use App\Http\Controllers\FormSubmissionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'web'])->group(function () {
    Route::get('/forms/{form}/{formField}/submissions', [FormSubmissionController::class, 'submissions']);
});
