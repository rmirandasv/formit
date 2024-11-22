<?php

namespace App\Http\Controllers;

use App\Actions\Form\CreateForm;
use App\Http\Requests\StoreFormRequest;
use App\Models\Form;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FormController extends Controller
{
    public function index()
    {
        $forms = Form::paginate(10);
        return Inertia::render('form/index', [
            'forms' => $forms
        ]);
    }

    public function create()
    {
        return Inertia::render('form/create');
    }

    public function store(StoreFormRequest $request, CreateForm $createForm)
    {
        $form = $createForm->handle($request->validated());
        return redirect()->route('forms.edit', ['form' => $form]);
    }

    public function edit(Form $form)
    {
        return Inertia::render('form/edit', [
            'form' => $form->load('fields')
        ]);
    }

    public function update(StoreFormRequest $request, Form $form)
    {
        $form->update($request->validated());
        return redirect()->route('forms.edit', ['form' => $form]);
    }
}
