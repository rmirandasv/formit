<?php

namespace App\Actions\Form;

use App\Models\FormField;

class UpdateFormField
{
    public function handle(FormField $formField, array $data): void
    {
        $formField->update($data);
    }
}
