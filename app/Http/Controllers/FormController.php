<?php

namespace App\Http\Controllers;

use App\Actions\Form\CreateForm;
use App\Actions\Form\DeleteForm;
use App\Actions\Form\UpdateFormSetting;
use App\Http\Requests\DeleteFormRequest;
use App\Http\Requests\StoreFormRequest;
use App\Http\Requests\UpdateFormSettingsRequest;
use App\Models\Form;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class FormController extends Controller
{
    public function index()
    {
        $forms = Form::withCount('submissions')
            ->paginate(10);
        return Inertia::render('form/index', [
            'forms' => $forms
        ]);
    }

    public function show(Form $form)
    {
        if (! Gate::allows('view', $form)) {
            abort(403);
        }

        $submissionsPerDay = $form->submissions()
            ->selectRaw('DATE(submitted_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->get()
            ->map(function ($item) {
                return [
                    'date' => $item->date,
                    'submissions' => $item->count
                ];
            })
            ->toArray();

        return Inertia::render('form/show', [
            'form' => $form->load('fields'),
            'submissionsPerDay' => $submissionsPerDay
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

    public function updateSettings(Form $form, UpdateFormSettingsRequest $request, UpdateFormSetting $updateFormSetting)
    {
        $updateFormSetting->handle($form, $request->validated());
        return redirect()->route('forms.edit', ['form' => $form]);
    }

    public function delete(Form $form, DeleteFormRequest $request, DeleteForm $deleteForm)
    {
        $request->validated();

        $deleteForm->handle($form);

        return redirect()->route('forms');
    }
}
