<?php

namespace App\Actions\Form;

use App\Models\Form;

class SubmitForm
{
    public function handle(Form $form, array $data): void
    {
        $submission = $form->submissions()->create();

        $submissionDetails = [];

        foreach ($data as $key => $value) {
            $fieldId = explode('_', $key)[1];
            $submissionDetails[] = [
                'form_field_id' => $fieldId,
                'response' => is_array($value) ? $value : [$value],
            ];
        }

        $submission->details()->createMany($submissionDetails);
    }
}
