<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Form extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'team_id',
        'name',
        'slug',
        'description',
    ];

    public function fields(): HasMany
    {
        return $this->hasMany(FormField::class);
    }
}
