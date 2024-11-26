<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PublicFormController extends Controller
{
    public function show(Form $form)
    {
        if (!$form->active) {
            return redirect()->route('home');
        }

        return Inertia::render('public/form', [
            'form' => $form->load('fields'),
        ]);
    }
}
