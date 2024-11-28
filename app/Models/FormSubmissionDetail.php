<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FormSubmissionDetail extends Model
{
    protected $fillable = [
        'form_submission_id',
        'form_field_id',
        'response',
    ];

    protected $casts = [
        'response' => 'array',
    ];
}
