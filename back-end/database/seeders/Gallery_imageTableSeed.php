<?php

namespace Database\Seeders;

use App\Models\GalleryImageModel;
use Illuminate\Database\Seeder;

class Gallery_imageTableSeed extends Seeder
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
                'id'=>1,
                'description'=>'Note1',    
                'name'=>'introduction',                   
                'url_image'=>'image/introduction/banner-image.jpg',        
                'content'=>2,
                'status'=>true,
            ],
            [
                'id'=>2,
                'description'=>'Note2',    
                'name'=>'abouts',                   
                'url_image'=>'image/introduction/about-1.jpg',        
                'content'=>2,
                'status'=>true,
            ],
            [
                'id'=>3,
                'description'=>'Note3',    
                'name'=>'abouts',                   
                'url_image'=>'image/introduction/about-1.jpg',        
                'content'=>2,
                'status'=>true,
            ],
            [
                'id'=>4,
                'description'=>'Note4',    
                'name'=>'abouts',                   
                'url_image'=>'image/introduction/about-3.jpg',        
                'content'=>2,
                'status'=>true,
            ],
            [
                'id'=>5,
                'description'=>'Note5',    
                'name'=>'event',                   
                'url_image'=>'',        
                'content'=>2,
                'status'=>true,
            ],
            [
                'id'=>6,
                'description'=>'Note6',    
                'name'=>'event',                   
                'url_image'=>'',        
                'content'=>2,
                'status'=>true,
            ],
            [
                'id'=>7,
                'description'=>'Note7',    
                'name'=>'event',                   
                'url_image'=>'',        
                'content'=>2,
                'status'=>true,
            ],
            [
                'id'=>8,
                'description'=>'Note8',    
                'name'=>'event',                   
                'url_image'=>'',        
                'content'=>2,
                'status'=>true,
            ],
            [
                'id'=>10,
                'description'=>'Note9',    
                'name'=>'event',                   
                'url_image'=>'',        
                'content'=>2,
                'status'=>true,
            ],
            [
                'id'=>11,
                'description'=>'Note10',    
                'name'=>'event',                   
                'url_image'=>'',        
                'content'=>2,
                'status'=>true,
            ],
            [
                'id'=>12,
                'description'=>'Note11',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/KMS_company.png',        
                'content'=>'KMS',
                'status'=>true,
            ],
            [
                'id'=>13,
                'description'=>'Note12',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/Atoma_company.png',        
                'content'=>'ATOMA',
                'status'=>true,
            ],
            [
                'id'=>14,
                'description'=>'Note13',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/BlueOtter_company.png',        
                'content'=>'BLUE OTTER',
                'status'=>true,
            ],
            [
                'id'=>15,
                'description'=>'Note14',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/CodeEngine_company.jpg',        
                'content'=>'CODE ENGINEER',
                'status'=>true,
            ],
            [
                'id'=>16,
                'description'=>'Note15',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/MGM_company.png',        
                'content'=>'MGM',
                'status'=>true,
            ],
            [
                'id'=>17,
                'description'=>'Note16',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/Bap_company.jpg',        
                'content'=>'BAP',
                'status'=>true,
            ],
            [
                'id'=>18,
                'description'=>'Note17',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/Enouvo_company.png',        
                'content'=>'Enouvo',
                'status'=>true,
            ],
            [
                'id'=>19,
                'description'=>'Note18',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/A_better_vietnam.png',        
                'content'=>'Abetter VietNam',
                'status'=>true,
            ],
            [
                'id'=>20,
                'description'=>'Note19',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/Agitily_company.png',        
                'content'=>'Agitily',
                'status'=>true,
            ],
            [
                'id'=>21,
                'description'=>'Note20',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/DNVTC_college.png',        
                'content'=>'DANA-VTC',
                'status'=>true,
            ],
            [
                'id'=>22,
                'description'=>'Note21',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/CodeComplete_company.png',        
                'content'=>'Code complete',
                'status'=>true,
            ],
            [
                'id'=>23,
                'description'=>'Note22',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/Axon_active_company.png',        
                'content'=>'Axon Active',
                'status'=>true,
            ],
            [
                'id'=>24,
                'description'=>'Note23',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/DaNang_Go.jpg',        
                'content'=>'Da Nang Go',
                'status'=>true,
            ],
            [
                'id'=>25,
                'description'=>'Note24',    
                'name'=>'partners',                   
                'url_image'=>'image/image_partner/Microsoft_company.PNG',        
                'content'=>'Microsoft',
                'status'=>true,
            ]                
        ];

        try {
            foreach ($posts as $post) {
                GalleryImageModel::create($post);
            }
        } catch (\Throwable $th) {

        }
    }
}
