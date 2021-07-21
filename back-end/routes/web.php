<?php

use App\Http\Controllers\Admin\PageController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\IsAdmin;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/login', [PageController::class,'getAdmin']);
Route::post('/login',[PageController::class,'LoginAdmin']);

// Signup Admin
Route::get('/signup', function () {
    return view('Admin.Page.signup');
});
Route::post('/signup',[PageController::class,'addAdmin']);




Route::group(['middleware' => IsAdmin::class], function() {
    
    Route::get('/',[PageController::class,'getIndex']);
    Route::get('logout',[PageController::class,'Logout_admin']);
    // Start contact
    Route::get('contacts',[PageController::class,'getContact']);
    // End Contact
    Route::get('hihi',function(){
        return view('Admin.Introduction.introduction');
    });
    Route::get('uploadfile',[PageController::class,'getFile']);
    Route::post('uploadfile',[PageController::class,'postFile']);
    // Start Footer
    Route::get('/footers',[PageController::class,'getFooter']);
    Route::get('/edit-footer/{id}',[PageController::class,'getEditFooter']);
    Route::post('/footer',[PageController::class,'updateFooter']);
    Route::post('delete/{id}',[PageController::class,'DeleteFooter']);
    // End Footer
});

// Route::group(['middleware' => Adminlogin::class], function() {
    
//     Route::get('/', [GetData::class,'getdata_home'])->name('homeadmin');

//     Route::get('/logout',[Admincontroller::class,'getLogout'])->name('logout');
//     Route::get('liststaff',function(){
//         return view('admin.liststaff');
//     });
   
// });