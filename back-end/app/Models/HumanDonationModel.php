<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HumanDonationModel extends Model
{
    use HasFactory;
    protected $table='individual_donation';
    protected $fillable = array('your_name', 'email', 'payment_method','phone','id_role','money');
    public $timestamps = true;
}
