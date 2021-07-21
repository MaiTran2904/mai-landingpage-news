@extends('Admin.index')
@section('content')
<div class="space50">&nbsp;</div>
    <div class="container beta-relative">
        <div class="pull-left">
            <h2>Edit san pham</h2>
        </div>
    </div>
        <div class="container">
            <div className="d-flex flex-column text-center">
                <form action="editproduct" method="post" encType="multipart/form-data">   
                    @csrf                    
                    <div className="form-group">
                        <input type="text" class="form-control" name = "name" value="{{$product->name}}" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <input type="text" class="form-control" value="{{$product->unit_price}}" name = "unit_price" placeholder="Enter unit_price" />
                    </div>
                    <div className="form-group">
                        <textarea  type="text" class="form-control" name = "description" >{{$product->description}}</textarea>
                    </div>
                    <div className="form-group">
                        <input type="number" class="form-control" name = "promotion_price" value="{{$product->promotion_price}}"  />
                    </div>   
                    <div className="form-group">
                        <input type="text" class="form-control" name = "unit" value="{{$product->unit}}"  />
                    </div> 
                    <div className="form-group">
                        <input type="number" class="form-control" name = "new" value="{{$product->new}}" />
                    </div> 
                    <div className="form-group">                      
                        <select id="cars" name="carlist" form="carform" className="form-group">
                            @foreach ($loai as $item)
                                <option value="{{$item->id_type}}" name="type">{{$item->name}}</option>
                            @endforeach   
                        </select>                          
                    </div> 
                    <div className="form-group">
                        <input type="file" class="form-control-file col-3" name = "image" value=""  />
                        <img class="col-3" src="source/image/product/{{$product->image}}" height="100px" width="500px"/>
                    </div> 
                    
                    <input type="text" name="id" hidden  value="{{$product->id}}" />                            
                    <button type="submit"  className="btn btn-info btn-block btn-round" >Post Product</button>
                    </form>
                  
                </div>  
    </div>
@endsection