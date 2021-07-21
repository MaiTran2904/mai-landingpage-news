<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
<script src="resource/js/scripts.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
<script src="resource/assets/demo/chart-area-demo.js"></script>
<script src="resource/assets/demo/chart-bar-demo.js"></script>
<script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
<script src="resource/js/datatables-simple-demo.js"></script>
<script src="resource/assets/demo/chart-pie-demo.js"></script>


{{-- Editor --}}

   
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>



<script type="text/javascript">
    AWS.config.region = 'ap-southeast-1'; // 1. Enter your region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'ap-southeast-1:f91781b7-2b9d-4220-9f02-39f0b6b69f43' // 2. Enter your identity pool
    });
 
    AWS.config.credentials.get(function(err) {
        if (err) alert(err);
        console.log(AWS.config.credentials);
    });
 
    var bucketName = 'meu-landingpage'; // Enter your bucket name
    var bucket = new AWS.S3({
        params: {
            Bucket: bucketName
        }
    });
 
    var fileChooser = document.getElementById('file-chooser');
    var button = document.getElementById('upload-button');
    var results=document.getElementById('results');
    // console.log(    document.getElementById('results').style.backgroundImage="url('https://meu-landingpage.s3-ap-southeast-1.amazonaws.com/"+results+"')";;
    // document.getElementById('results').innerHtml = '<img src="' +results+'"/>';
    console.log(results);
    button.addEventListener('click', function() {
        var file = fileChooser.files[0];
        if (file) {
            // document.getElementById('results').innerHTML = '<img src="' +results+'"/>';
            results.innerHTML='';
            // document.getElementById('results').src=results;
            var objKey = 'testing/' + file.name;
            var params = {
                Key: objKey,
                ContentType: file.type,
                Body: file,
                ACL: 'public-read'
            };
            bucket.putObject(params, function(err, data) {
                if (err) {
                    results.innerHTML = 'ERROR: ' + err;
                } else {
                    listObjs();
                }
            });
        } else {
            results.innerHTML = 'Nothing to upload.';
        }
    }, false);
    function listObjs() {
        var prefix = 'testing';
        bucket.listObjects({
            Prefix: prefix
        }, function(err, data) {
            if (err) {
                results.innerHTML = 'ERROR: ' + err;
            } else {
                var objKeys = "";
                data.Contents.forEach(function(obj) {
                    objKeys += obj.Key + "<br>";
                });
                document.getElementById('results').innerHTML = objKeys;
            }
        });
    }
    </script>