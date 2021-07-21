{{-- @extends('Admin.index') --}}
{{-- @section('content') --}}
<script src="https://cdn.ckeditor.com/ckeditor5/23.0.0/classic/ckeditor.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<main>
    <div class="container mt-5">
        <div class="row">
            <div class="col-xl-12 text-right">
                <a href="{{ url('footers') }}" class="btn btn-danger"> Back </a>
            </div>
        </div>
        <form action={{URL::to('/footer')}} method="post" >
            {{csrf_field()}}
        <div class="row">
            <div class="col-xl-8 col-lg-8 col-sm-12 col-12 m-auto">
                @if(Session::has('success'))
            <div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">×</button>
                {{ Session::get('success') }}
        </div>
                @elseif(Session::has('failed'))
        <div class="alert alert-danger alert-dismissible">
            <button type="button" class="close" data-dismiss="alert">×</button>
                {{ Session::get('failed') }}
        </div>
                @endif
        <div class="card shadow">
            <div class="card-header">
                <h4 class="card-title"> Update Location Of PNV </h4>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label> Location </label>
                    <input type="text" class="form-control" value={{$footer->email}} name="email" placeholder="Enter the Title">
                </div>
                <div class="form-group">
                    <label> Phone </label>
                    <input type="phone" class="form-control" value={{$footer->phone}} name="phone" placeholder="Enter the Title">
                </div>
                <div class="form-group">
                    <label>  Location </label>
                    <textarea class="form-control" id="location" placeholder="location" name="location">{{$footer->location}}</textarea>
                </div>
                <div class="form-group">
                    <label> Description </label>
                    <input type="text" class="form-control" value="{{$footer->description}}" id="description" placeholder="description" name="description"/>
                </div>
            </div>
            <div class="card-footer"> 
                <button type="submit" class="btn btn-success"> Save </button>
            </div>
            </div>
            </div>
            </div>
        </form>
    </div>
    <script>
        ClassicEditor
        .create( document.querySelector( '#location' ) )
        .catch( error => {
        console.error( error );
        } );  
    </script>   
</main>
{{-- @endsection --}}