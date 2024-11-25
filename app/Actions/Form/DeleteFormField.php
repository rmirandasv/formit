<?php

namespace App\Actions\Form;

use App\Models\FormField;

class DeleteFormField
{
    public function handle(FormField $formField): void
    {
        $formField->delete();
    }
}
