<?php

namespace App\Actions\Form;

use App\Models\Form;

class DeleteForm
{
    public function handle(Form $form): void
    {
        $form->delete();
    }
}
