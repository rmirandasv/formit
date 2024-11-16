<?php

namespace App\Actions\Form;

use App\Models\Form;

class CreateFormField
{
    public function handle(Form $form, array $data)
    {
        $form->fields()->create($data);
    }
}
