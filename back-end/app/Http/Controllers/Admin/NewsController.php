<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NewsModel;
use GuzzleHttp\Psr7\Message;
use Illuminate\Support\Facades\Validator;

class NewsController extends Controller
{
     private $status = 200;

    public function index()
    {
        $news=NewsModel::all();
        if(count($news)>0){
            return response()->json(["status"=>$this->status,"success"=>true,"count"=>count($news),"data"=>$news]);
        }else{
            return response()->json(["status"=>"failed","success"=>false,"message"=>"Whoopa! no record found"]);
        }
    }


    public function store(Request $request)
    {
        $validation = Validator::make($request->all(),
        [
            "name"  => "required",
            "image" => "required",
            "title"  => "required",
            "content"  => "required",

            'image'=>'mimes:jpeg,jpg,png,gif|max:10000'
        ],
        [
            'name.required' => 'Please enter name!',
            'image.required' => 'Please add image!',
            'title.required' => 'Please enter title!',
            'content.required'=>'Please enter content!',
        ]);


        if ($validation->fails()){
            return response()->json(
                ["status" => "error", "errors" => $validation->getMessageBag()
            ]);
        }
         //nếu dùng $this->validate() thì lấy về lỗi: $errors = $vali
        //kiểm tra file tồn tại
        $name='';

        if($request->hasfile('image'))
        {
            $this->validate($request,
                [
                //Kiểm tra đúng file đuôi .jpg,.jpeg,.png.gif và dung lượng không quá 2M
                    'image' => 'mimes:jpg,jpeg,png,gif|max:2048',
                ],
                [
                //Tùy chỉnh hiển thị thông báo không thõa điều kiện
                    'image.mimes' => 'Chỉ chấp nhận hình thẻ với đuôi .jpg .jpeg .png .gif',
                    'image.max' => 'Hình thẻ giới hạn dung lượng không quá 2M',
                ]);

            $file = $request->file('image');
            $name=time().'_'.$file->getClientOriginalName();
            $destinationPath=public_path('images'); //project\public\images\cars, //public_path(): trả về đường dẫn tới thư mục public
            $file->move($destinationPath, $name); //lưu hình ảnh vào thư mục public/images/cars
        } //hết if

        $new=new NewsModel();
        $new->name=$request->input('name');
        $new->title=$request->input('title');
        $new->content=$request->input('content');
        $new->image=$name;
        $new->save();

        if($new)
        {
            return response()->json(["status" => $this->status, "data" => $new]);
        }
        else
        {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }
    }

    public function show($id) {
        $new = NewsModel::find($id);
        if(!is_null($new)) {
            return response()->json(["status" => $this->status, "success" => true, "data" => $new]);
        }
        else {
            return response()->json(["status" => "failed", "success" => false, "message" => "Whoops! no car found"]);
        }

    }

    public function destroy($id)
    {
        $new=NewsModel::find($id);
        $new->delete();
        return response()->json([
            'message' => 'Deleted successfully!'
        ]);
    }

    public function update(Request $request, $id) {
        $validation = Validator::make($request->all(),
        [
            "name"  => "required",
            "title" => "required",
            "content"  => "required",
            "image"  => "required",
            'image'=>'mimes:jpeg,jpg,png,gif|max:10000'
        ],
        );

        if ($validation->fails()){
            return response()->json(
                ["status" => "error", "errors" => $validation->getMessageBag()
            ]);
        }
        // else{

        //kiểm tra file tồn tại
        $name='';

        if($request->hasfile('image'))
        {
            $this->validate($request,
                [
                //Kiểm tra đúng file đuôi .jpg,.jpeg,.png.gif và dung lượng không quá 2M
                    'image' => 'mimes:jpg,jpeg,png,gif|max:2048',
                ],
                [
                //Tùy chỉnh hiển thị thông báo không thõa điều kiện
                    'image.mimes' => 'Chỉ chấp nhận hình thẻ với đuôi .jpg .jpeg .png .gif',
                    'image.max' => 'Hình thẻ giới hạn dung lượng không quá 2M',
                ]);

            $file = $request->file('image');
            $name=time().'_'.$file->getClientOriginalName();
            $destinationPath=public_path('images'); //project\public\images\cars, //public_path(): trả về đường dẫn tới thư mục public
            $file->move($destinationPath, $name); //lưu hình ảnh vào thư mục public/images/cars
        } //hết if


        $new=NewsModel::find($id);
        if (!is_null($car)){
            $new->name=$request->input('name');
            $new->title=$request->input('title');
            $new->content=$request->input('content');
            if($name==''){
                $name=$new->image;
            }
            $new->image=$name;
            $new->save();

           if($new)
        {
            return response()->json(["status" => $this->status, "data" => $new]);
        }
        else
        {
            return response()->json(["status" => "error", "errors" => $validation->getMessageBag()]);
        }

        }
   //}//đóng else

    }
}
