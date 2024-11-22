<?php

namespace App\Http\Controllers;

use App\Actions\Form\CreateFormField;
use App\Http\Requests\StoreFormFieldRequest;
use App\Models\Form;
use Illuminate\Http\Request;

class FormFieldController extends Controller
{
    public function store(Form $form, StoreFormFieldRequest $request, CreateFormField $createFormField)
    {
        $createFormField->handle($form, $request->validated());

        return redirect()->route('forms.edit', $form);
    }
}
