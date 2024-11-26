<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Form extends Model
{
    use SoftDeletes, HasFactory;

    protected $fillable = [
        'team_id',
        'name',
        'slug',
        'description',
        'active',
        'starts_at',
        'ends_at',
        'password_protected',
        'password',
    ];

    protected $casts = [
        'active' => 'boolean',
        'starts_at' => 'datetime',
        'ends_at' => 'datetime',
        'password_protected' => 'boolean',
    ];

    protected $appends = [
        'url',
    ];

    public function fields(): HasMany
    {
        return $this->hasMany(FormField::class);
    }

    public function team(): BelongsTo
    {
        return $this->belongsTo(Team::class);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('active', true);
    }

    protected function getUrlAttribute(): string
    {
        return route('public-forms.show', $this);
    }
}
