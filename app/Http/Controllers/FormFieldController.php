<?php

namespace App\Http\Controllers;

use App\Actions\Form\CreateFormField;
use App\Actions\Form\DeleteFormField;
use App\Http\Requests\DeleteFormFieldRequest;
use App\Http\Requests\StoreFormFieldRequest;
use App\Models\Form;
use App\Models\FormField;
use Illuminate\Http\Request;

class FormFieldController extends Controller
{
    public function store(Form $form, StoreFormFieldRequest $request, CreateFormField $createFormField)
    {
        $createFormField->handle($form, $request->validated());

        return redirect()->route('forms.edit', $form);
    }

    public function delete(Form $form, FormField $formField, DeleteFormFieldRequest $request, DeleteFormField $deleteFormField)
    {
        $request->validated();

        $deleteFormField->handle($formField);

        return redirect()->route('forms.edit', $form);
    }
}
