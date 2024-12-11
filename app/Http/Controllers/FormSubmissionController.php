<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\FormField;
use App\Models\FormSubmission;
use App\Models\FormSubmissionDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class FormSubmissionController extends Controller
{
    public function index(Form $form, Request $request) {
        if (!Gate::allows('view', $form)) {
            abort(403);
        }

        $submissions = FormSubmission::with('form', 'details', 'details.formField')
            ->where('form_id', $form->id)
            ->paginate($request->get('per_page', 10));

        return Inertia::render('form/submissions', [
            'form' => $form->load('fields'),
            'submissions' => $submissions
        ]);
    }
}
