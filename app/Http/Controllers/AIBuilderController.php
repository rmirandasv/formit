<?php

namespace App\Http\Controllers;

use App\Actions\Form\CreateFormFromPrompt;
use EchoLabs\Prism\Enums\Provider;
use EchoLabs\Prism\Prism;
use EchoLabs\Prism\Schema\ArraySchema;
use EchoLabs\Prism\Schema\ObjectSchema;
use EchoLabs\Prism\Schema\StringSchema;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AIBuilderController extends Controller
{
    public function index()
    {
        return Inertia::render('ai-builder/index');
    }

    public function message(Request $request, CreateFormFromPrompt $createFormFromPrompt)
    {
        $data = $request->validate([
            'message' => 'required|string',
        ]);

        $message = $data['message'];

        $form = $createFormFromPrompt->handle($message);

        return redirect()->route('forms.show', $form);
    }
}
