<?php

namespace Database\Seeders;

use App\Models\ValueModel;
use Illuminate\Database\Seeder;

class ValueTableSeeder extends Seeder
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
                'image'=>'image/banner/banner-image.jpg',
                'title'=>'Passerelles numériques Vietnam',
                'content'=>'A place to nurture young dreams',
                'descriptions'=>'Let is build a strong and kind IT community together with the #itnuoiit . project'
            ],
            [
                'image'=>'image/banner/banner-image.jpg',
                'title'=>'WHO ARE WE?',
                'content'=>'Hello Everybody',
                'descriptions'=>'Passerelles numériques has been operating in Vietnam since 2010, with its head office in Da Nang city, under the operating license issued by the Ministry of Foreign Affairs of Vietnam.'
            ]     
        ];

        try {
            foreach ($posts as $post) {
                ValueModel::create($post);
            }
        } catch (\Throwable $th) {

        }
    }
}
