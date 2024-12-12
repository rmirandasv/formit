<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $forms = Form::withCount('submissions')
            ->orderBy('created_at', 'desc')
            ->limit(5)
            ->get();
        return Inertia::render('dashboard', [
            'forms' => $forms
        ]);
    }
}
