<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Actions\Form\CreateForm;
use App\Models\Team;
use App\Models\User;

use function Pest\Laravel\actingAs;

uses(RefreshDatabase::class);

test('Create new form', function () {
    $user = User::factory()->create();
    $team = Team::factory()->for($user)->create();
    $user->current_team_id = $team->id;
    $user->save();

    actingAs($team->user);

    $createFormAction = new CreateForm();

    $form = $createFormAction->handle([
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
