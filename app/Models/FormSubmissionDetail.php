<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function formField(): BelongsTo
    {
        return $this->belongsTo(FormField::class);
    }

    public function formSubmission(): BelongsTo
    {
        return $this->belongsTo(FormSubmission::class);
    }
}
