<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\NewsModel;

class NewsController extends Controller
{
    public function index()
    {
        $news=NewsModel::all();
        return $news;
    }

}
