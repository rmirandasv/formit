<?php

use App\Http\Controllers\AIBuilderController;
use App\Http\Controllers\FormSubmissionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum', 'web'])->group(function () {
    Route::post('/ai-builder', [AIBuilderController::class, 'message']);
});
