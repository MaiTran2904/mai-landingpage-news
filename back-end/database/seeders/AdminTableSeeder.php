<?php

namespace Database\Seeders;

use App\Models\AdminModel;
use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $posts = [
            [
                'name'=>'Hoang Trung Quan',
                'username'=>'quanhuhoq111@gmail.com',
                'password'=>'202cb962ac59075b964b07152d234b70',
                'avatar'=>'https://i.ibb.co\/JphLzFT\/hihi-jpg.jpg'
            ],
            [
                'name'=>'A Viet Duong',
                'username'=>'hoangtrungquan2001@gmail.com',
                'password'=>'202cb962ac59075b964b07152d234b70',
                'avatar'=>'https://i.ibb.co\/LkrpbFX\/seeder-PNG.png'
            ],
            [
                'name'=>'Dang Thu Sang',
                'username'=>'admin@admin.com',
                'password'=>'202cb962ac59075b964b07152d234b70',
                'avatar'=>'https://i.ibb.co\/YcbYD7W\/model-Trung-Quan-PNG.png'
            ]        
        ];
        try {
            foreach ($posts as $post) {
                AdminModel::create($post);
            }
        } catch (\Throwable $th) {

        }
    }
}
