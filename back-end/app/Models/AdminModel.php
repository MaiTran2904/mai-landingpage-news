<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as admins;
class AdminModel extends admins
{
    use HasFactory;
    protected $table='admin';
    protected $fillable = ['name','avatar','username','password'];
    public $timestamps = true;
}
