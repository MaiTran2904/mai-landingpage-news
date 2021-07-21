<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManagerModel extends Model
{
    use HasFactory;
    protected $table='staffs';
    protected $fillable=['name','image','phone','position','description','id_human'];
}
