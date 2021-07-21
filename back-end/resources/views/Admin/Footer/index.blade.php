@extends('Admin.index')
@section('content')

<main>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Tables HIHI</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item "><a href="admin">Dashboard</a></li>
            <li class="breadcrumb-item active">Tables</li>
        </ol>               
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                DataTable Hihi
            </div>
            <div class="card-body">
                <div id="app"></div>
                <table id="datatablesSimple">
                    <thead>
                        <tr>
                            <th scope="col">ID </th>
                            <th scope="col">Phone </th>
                            <th scope="col">Email </th>
                            <th scope="col">Location </th>
                            <th scope="col">Description</th>  
                            <th scope="col">Action</th>  
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th scope="col">ID </th>
                            <th scope="col">Phone </th>
                            <th scope="col">Email </th>
                            <th scope="col">Location </th>
                            <th scope="col">Description</th> 
                            <th scope="col">Action</th>     
                        </tr>
                    </tfoot>
                    @if(count($footer) > 0)
                    <tbody>
                        @foreach($footer as $f)
                        <tr>
                            <th scope="col">{{$f->id}}</th>
                            <td>{{$f->phone}}</td>
                            <td>{{$f->email}}</td>
                            <td>{!! html_entity_decode($f->location) !!}</td>
                            <td>{{$f->description}}</td>             
                            <td>
                                <form role="form" action="edit-footer/{{$f->id}}" method="get">
                                    @csrf
                                    <button class="btn btn-warning" name="edit" data-toggle="modal" data-target="#exampleModal">
                                        Editer  
                                    </button>
                                </form>
                                <form role="form" action="delete/{{$f->id}}" method="post">
                                    @csrf
                                    <button class="btn btn-danger" name="delete">
                                        Delete
                                    </button>
                                </form>               
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                    {{-- {{ $footer->links() }} --}}
                    @endif
                </table>         
            </div>
        </div>
    </div>
</main>
@endsection
