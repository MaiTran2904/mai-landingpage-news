<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactModel extends Model
{
    use HasFactory;
    protected $table='partners_vip';
    protected $fillable=['name','email','phone','messages','position'];
    public $timestamps = false;
    
}
