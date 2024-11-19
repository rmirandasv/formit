<?php

namespace App\Actions\Form;

use App\Models\Form;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class CreateForm
{
    public function handle(array $data): Form
    {
        $data['team_id'] = Auth::user()->current_team_id;

        $data['slug'] = Str::random(10);

        while (Form::where('slug', $data['slug'])->exists()) {
            $data['slug'] = Str::random(10);
        }

        return Form::create($data);
    }
}
