<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganizationModel extends Model
{
    use HasFactory;
    protected $table='organazition_donation';
    protected $fillable = array('your_name', 'email', 'payment_method','phone','id_role','money');
    public $timestamps = true;
}
