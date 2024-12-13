<?php

namespace App\Actions\Form;

use App\Models\Form;
use EchoLabs\Prism\Enums\Provider;
use EchoLabs\Prism\Prism;
use EchoLabs\Prism\Schema\ArraySchema;
use EchoLabs\Prism\Schema\ObjectSchema;
use EchoLabs\Prism\Schema\StringSchema;

class CreateFormFromPrompt
{
    public function __construct(private CreateForm $createForm, private CreateFormField $createFormField)
    {
        
    }

    public function handle($message): Form
    {
        $responseSchema = new ObjectSchema(
            name: 'form',
            description: 'Form response',
            properties: [
                new StringSchema('title', 'Title of the form'),
                new StringSchema('description', 'Description of the form'),
                new ArraySchema('fields', 'Fields of the form',
                    new ObjectSchema(
                        name: 'field',
                        description: 'Field of the form',
                        properties: [
                            new StringSchema('name', 'Name of the field'),
                            new StringSchema('type', 'Type of the field'),
                            new StringSchema('label', 'Label of the field'),
                            new StringSchema('placeholder', 'Placeholder of the field'),
                            new StringSchema('required', 'Required of the field'),
                        ]
                    ),
                ),
            ],
            requiredFields: ['title', 'description', 'fields'],
        );

        $response = Prism::structured()
            ->using(Provider::OpenAI, 'gpt-4o')
            ->withSchema($responseSchema)
            ->withSystemPrompt('Create a form with title, description, and fields')
            ->withPrompt($message)
            ->generate();

        $object = $response->object;

        $form = $this->createForm->handle([
            'name' => $object['title'],
            'description' => $object['description'],
        ]);

        foreach ($object['fields'] as $field) {
            $this->createFormField->handle($form, [
                'type' => $field['type'],
                'label' => $field['label'],
                'required' => true,
                'options' => $field['options'] ?? [],
            ]);
        }

        return $form;
    }
}
