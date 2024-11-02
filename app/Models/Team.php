<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'owner_id',
        'name',
        'slug',
        'description',
        'website',
        'logo',
        'cover',
    ];
}
