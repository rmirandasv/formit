<?php

namespace App\Actions\Form;

use App\Models\Form;

class CreateForm
{
    public function handle(array $data): Form
    {
        return Form::create($data);
    }
}
