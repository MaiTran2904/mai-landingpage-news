<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStaffsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::create('staffs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('name');
            $table->string('email');
            $table->string('image');
            $table->string('position');
            $table->string('descripion');
            $table->integer('id_human')->unsigned();
            $table->timestamps();
        });
        Schema::table('staffs',function($table){
            $table->foreign('id_human')->references('id')->on('human_resource');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('staffs');
    }
}
