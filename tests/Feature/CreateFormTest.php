<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Actions\Form\CreateForm;
use App\Models\Team;
use App\Models\User;

uses(RefreshDatabase::class);

test('Create new form', function () {
    $team = Team::factory()->for(User::factory())->create();

    $createFormAction = new CreateForm();

    $form = $createFormAction->handle([
        'team_id' => $team->id,
        'name' => 'Test Form',
        'slug' => 'test-form',
        'description' => 'This is a test form',
    ]);

    $this->assertDatabaseHas('forms', [
        'team_id' => $team->id,
        'name' => $form->name,
        'slug' => $form->slug,
        'description' => $form->description,
    ]);
});
