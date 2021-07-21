<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image');
            $table->integer('quantity');
            $table->string('source'); // field class of student
            $table->string('description');
            $table->integer('id_url')->unsigned();
            $table->timestamps();
        });
        Schema::table('students',function($table){
            $table->foreign('id_url')->references('id')->on('gallery_image');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
}
