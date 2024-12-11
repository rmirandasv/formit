<?php

namespace App\Exports;

use App\Models\Form;
use App\Models\FormSubmission;
use App\Models\FormSubmissionDetail;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;

class FormSubmissionExport implements FromCollection
{
    use Exportable;

    public function __construct(private Form $form)
    {
        
    }

    public function collection()
    {
        return FormSubmissionDetail::with('formField')
            ->whereHas('formSubmission', function ($query) {
                $query->where('form_id', $this->form->id);
            })
            ->get()
            ->map(function (FormSubmissionDetail $detail) {
                return [
                    'Submission ID' => $detail->form_submission_id,
                    'Field' => $detail->formField->label,
                    'Response' => implode(', ', $detail->response),
                ];
            });
    }
}
