<?php

namespace App\Actions\Form;

use App\Models\Form;

class UpdateFormSetting
{
    public function handle(Form $form, array $data): void
    {
        $form->update($data);
    }
}
