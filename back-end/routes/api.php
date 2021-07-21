<?php

use App\Http\Controllers\API\Donation_IndividualController;
use App\Http\Controllers\API\Donation_OrganizationController;
use App\Http\Controllers\API\IntroduceController;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\API\FooterController;
use App\Http\Controllers\API\ValueController;
use App\Http\Controllers\API\NewsController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Introduction
Route::get('/introductions','IntroduceController@header');
Route::resource('/introduction', IntroduceController::class);
// end Introduction

// Start Value

Route::resource('/values', ValueController::class);

//End Value

// Start contact
Route::resource('/contacts', ContactController::class);
//  End Contact


// Start Footer
Route::resource('/footer', FooterController::class);
// End Footer

// Start news
Route::resource('news', NewsController::class);
// End news

// Donation Individual
Route::resource('individual',Donation_IndividualController::class);
// End Individual

// Donation Individual
Route::resource('orgranization',Donation_OrganizationController::class);
// End Individual
