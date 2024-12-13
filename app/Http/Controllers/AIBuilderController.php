<?php

namespace App\Http\Controllers;

use EchoLabs\Prism\Enums\Provider;
use EchoLabs\Prism\Prism;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AIBuilderController extends Controller
{
    public function index()
    {
        return Inertia::render('ai-builder/index');
    }

    public function message(Request $request)
    {
        $data = $request->validate([
            'message' => 'required|string',
        ]);

        $message = $data['message'];

        $response = Prism::text()
            ->using(Provider::OpenAI, 'gpt-4o')
            ->withPrompt($message)
            ->generate();

        return response()->json([
            'message' => $message,
            'response' => $response->text,
        ]);
    }
}
