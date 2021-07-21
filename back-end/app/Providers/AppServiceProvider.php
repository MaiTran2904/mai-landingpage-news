<?php

namespace App\Providers;

use App\Models\AdminModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if (env('APP_ENV') == 'Production') {
            URL::forceScheme('https');
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('Admin.header', function ($view) {   
            $admin_id = Session('id-admin'); 
            $select_avatar=DB::table('admin')->select('avatar')->where('id','=',$admin_id)->get();    
            // $select_avatar=DB::table('admin')->where('id_admin','=',$admin_id)->get();
            // dd($select_avatar[0]->avatar);
            $view->with('select_avatar',$select_avatar);
        }); 
    }
}
