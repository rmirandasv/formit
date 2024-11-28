<?php

namespace App\Http\Controllers;

use App\Actions\Form\SubmitForm;
use App\Http\Requests\SubmitFormRequest;
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

    public function store(Form $form, SubmitFormRequest $request, SubmitForm $submitForm)
    {
        $submitForm->handle($form, $request->fields);

        return redirect()->route('public-forms.thank-you', $form);
    }

    public function thankYou(Form $form)
    {
        return Inertia::render('public/thank-you', [
            'form' => $form,
        ]);
    }
}
