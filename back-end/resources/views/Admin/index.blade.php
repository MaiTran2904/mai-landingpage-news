<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Dashboard - Admin Passerelles numériques Vietnam</title>
        <link rel="icon" href="image/logo.png"/>
        <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
        <link href="resource/css/styles.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" crossorigin="anonymous"></script>
        <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.12.min.js"></script>

        
    </head>
    <body class="sb-nav-fixed">
        @include('Admin.header')
        <div id="layoutSidenav">
            @include('Admin.layout')
            <div id="layoutSidenav_content">
                @yield('content')
            </div>
        </div>
        @include('Admin.script')
    </body>
</html>
