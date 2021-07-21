<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IntroduceModel extends Model
{
    use HasFactory;
    protected $table='introduction';
    protected $fillable=['image','title','content','description'];
    public $timestamps = true;
}
