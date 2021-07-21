@extends('Admin.index')
@section('content')

<main>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Tables Contact</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item "><a href="index">Dashboard</a></li>
            <li class="breadcrumb-item active">Tables</li>
        </ol>               
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                DataTable Contact
            </div>
            <div class="card-body">
                <div id="app"></div>
                <table id="datatablesSimple">
                    <thead>
                        <tr>
                            <th scope="col">ID </th>
                            <th scope="col">Name </th>
                            <th scope="col">Phone </th>
                            <th scope="col">Email </th>
                            <th scope="col">Position </th>
                            <th scope="col">Description</th>  
                            <th scope="col">Action</th>  
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th scope="col">ID </th>
                            <th scope="col">Name </th>
                            <th scope="col">Phone </th>
                            <th scope="col">Email </th>
                            <th scope="col">Position </th>
                            <th scope="col">Description</th> 
                            <th scope="col">Action</th>     
                        </tr>
                    </tfoot>
                    <tbody>
                        @foreach($contact as $sanpham)
                        <tr>
                            <th scope="col">{{$sanpham->id}}</th>
                            <td>{{$sanpham->name}}</td>
                            <td>{{$sanpham->Phone}}</td>
                            <td>{{$sanpham->email}}</td>
                            <td>{{$sanpham->messages}}</td>
                            <td>{{$sanpham->position}}</td>             
                            <td>
                                <form role="form" action="edited-products/{{$sanpham->id}}" method="get">
                                    @csrf
                                    <button class="btn btn-warning" name="edit" data-toggle="modal" data-target="#exampleModal">
                                        Editer  
                                    </button>
                                </form>
                                <form role="form" method="post">
                                    @csrf
                                    <button  class="btn btn-danger" name="delete">
                                        Delete
                                    </button>
                                </form>               
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>         
            </div>
        </div>
    </div>
</main>
@endsection
