<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactModel;
use App\Models\FooterModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;

class PageController extends Controller
{
    public function getIndex(){
        // dd(Auth::guard('admin')->user()->username);
        return view('Admin.Page.chart');
    }
    public function getAdmin(){
        return view('Admin.Page.login');
    }
    public function LoginAdmin(Request $request){
        // $email = $request->email;
    	// $password = md5($request->password);
    	// $result = DB::table('admin')->where('username',$email)->where('password',$password)->first();
        // $select_avatar=$result->avatar;
    	// if($result){
    	// 	Session::put('id-admin',$result->id);
        //     Session::put('name-admin',$result->name);    
    	// 	return Redirect::to('/index')->with('select_avatar',$select_avatar);
    	// }else{
    	// 	return Redirect::to('/login');
    	// }
        // Session::save();
        $credentials = array('username' => $request->email, 'password' => $request->password);
        if (Auth::guard('admin')->attempt($credentials)) {
            return Redirect::to('/')->with(['flag' => 'alert', 'message' => 'Đăng nhập thành công']);
        } else {
            return redirect()->back()->with(['flag' => 'danger', 'thongbao' => 'Đăng nhập không thành công']);
        }
    }
    public function addAdmin(Request $request){
        $data = array();
    	$data['name'] = $request->name;
    	$data['username'] = $request->email;
    	$data['password'] = bcrypt($request->password);
        $data1=$this->save_record_image($_FILES['image']);
        $data['avatar']=$data1['data']['url'];
    	$admin_id = DB::table('admin')->insertGetId($data);
    	return Redirect::to('/login');
    }
        public function Logout_admin(){
            if(Auth::guard('admin')->check()) // this means that the admin was logged in.
                {
                    Auth::guard('admin')->logout();
                    return Redirect::to('/login');
                }      
        }
    
    // Start Contact

        public function getContact(){
            $contact=ContactModel::all();
            return view('Admin.Contact.contact',compact('contact'));
        }

    // // End Contact
    // public function getFile(){
    //     $allFile=Storage::allFiles('files'); 
    //     $files=[];
    //     foreach ($allFile as $key) {
    //         array_push($files,Storage::url($key));
    //         // dd(Storage::url($key));
    //     }
    //     return view('Admin.Demo.demo',['files'=>$files]);
    // }
    // public function postFile(Request $request){
    //     // dd($request->image);
    //     foreach ($request->image as $key) {
    //         $file_name=$key->getClientOriginalName();
    //         Storage::putFileAs('files',$key,$file_name,'public');
    //     }
    // }


    // Post file
    public function save_record_image($image, $name = null)
    {
        $API_KEY = '3e710996d45cea4278dd0eb061dd0999';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://api.imgbb.com/1/upload?key=' . $API_KEY);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        $extension = pathinfo($image['name'], PATHINFO_EXTENSION);
        $file_name = ($name) ? $name . '.' . $extension : $image['name'];
        $data = array('image' => base64_encode(file_get_contents($image['tmp_name'])), 'name' => $file_name);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            return 'Error:' . curl_error($ch);
            curl_close($ch);
        } else {
            return json_decode($result, true);
            curl_close($ch);
        }
    }


    // Footer
    public function getFooter(){
        $footer=FooterModel::all();
        return view('Admin.Footer.index',compact('footer'));
    }
    public function getEditFooter($id){
        $footer=FooterModel::find($id);
        return view("Admin.Footer.editfooter",compact('footer'));  
    }
    public function updateFooter(Request $request,FooterModel $data)
    {
        
        $data->email = $request->email;       
        $data->phone = $request->phone;
        $data->location = $request->location;
        $data->description = $request->description;
        $data->save();
    return back()->with("success", "Post has been created");
    }
    public function DeleteFooter($id){
        $footer = FooterModel::find($id);
        $footer->delete();
        return Redirect::to('/footer'); 
    }
}
