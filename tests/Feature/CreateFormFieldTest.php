<?php

use App\Actions\Form\CreateFormField;
use App\Models\Form;
use App\Models\Team;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

use function Pest\Laravel\assertDatabaseHas;

uses(RefreshDatabase::class);

test('Create form field', function () {
    $form = Form::factory()
        ->for(Team::factory()->for(User::factory()))
        ->create();

    $formFieldAction = new CreateFormField();

    $formFieldAction->handle($form, [
        'form_id' => $form->id,
        'label' => 'Name',
        'type' => 'text',
        'options' => null,
        'required' => true,
        'order' => 1,
    ]);

    assertDatabaseHas('form_fields', [
        'form_id' => $form->id,
        'label' => 'Name',
        'type' => 'text',
        'options' => null,
        'required' => true,
        'order' => 1,
    ]);
});
