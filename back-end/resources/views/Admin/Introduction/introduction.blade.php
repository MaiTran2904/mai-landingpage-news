   
{{-- <!DOCTYPE html>
<html>
  <head>
     <!-- **DO THIS**: -->
    <!--   Replace SDK_VERSION_NUMBER with the current SDK version number -->
    <script src="https://sdk.amazonaws.com/js/aws-sdk-SDK_VERSION_NUMBER.js"></script>
    <!-- <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.12.min.js"></script> -->
    <script src="./s3_photoExample.js"></script>
    <script>
       function getHtml(template) {
          return template.join('\n');
       }
       listAlbums();
    </script>
  </head>
  <body>
    <h1>My Photo Albums App</h1>
    <div id="app"></div>
    
<script>

var albumBucketName = "meu-landingpage";
var bucketRegion = "ap-southeast-1";
var IdentityPoolId = "ap-southeast-1:f91781b7-2b9d-4220-9f02-39f0b6b69f43";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: albumBucketName }
});

function listAlbums() {
  s3.listObjects({ Delimiter: "/" }, function(err, data) {
    if (err) {
      return alert("There was an error listing your albums: " + err.message);
    } else {
      var albums = data.CommonPrefixes.map(function(commonPrefix) {
        var prefix = commonPrefix.Prefix;
        var albumName = decodeURIComponent(prefix.replace("/", ""));
        return getHtml([
          "<li>",
          "<span onclick=\"deleteAlbum('" + albumName + "')\">X</span>",
          "<span onclick=\"viewAlbum('" + albumName + "')\">",
          albumName,
          "</span>",
          "</li>"
        ]);
      });
      var message = albums.length
        ? getHtml([
            "<p>Click on an album name to view it.</p>",
            "<p>Click on the X to delete the album.</p>"
          ])
        : "<p>You do not have any albums. Please Create album.";
      var htmlTemplate = [
        "<h2>Albums</h2>",
        message,
        "<ul>",
        getHtml(albums),
        "</ul>",
        "<button onclick=\"createAlbum(prompt('Enter Album Name:'))\">",
        "Create New Album",
        "</button>"
      ];
      document.getElementById("app").innerHTML = getHtml(htmlTemplate);
    }
  });
}

function createAlbum(albumName) {
  albumName = albumName.trim();
  if (!albumName) {
    return alert("Album names must contain at least one non-space character.");
  }
  if (albumName.indexOf("/") !== -1) {
    return alert("Album names cannot contain slashes.");
  }
  var albumKey = encodeURIComponent(albumName);
  s3.headObject({ Key: albumKey }, function(err, data) {
    if (!err) {
      return alert("Album already exists.");
    }
    if (err.code !== "NotFound") {
      return alert("There was an error creating your album: " + err.message);
    }
    s3.putObject({ Key: albumKey }, function(err, data) {
      if (err) {
        return alert("There was an error creating your album: " + err.message);
      }
      alert("Successfully created album.");
      viewAlbum(albumName);
    });
  });
}

function viewAlbum(albumName) {
  var albumPhotosKey = encodeURIComponent(albumName) + "/";
  s3.listObjects({ Prefix: albumPhotosKey }, function(err, data) {
    if (err) {
      return alert("There was an error viewing your album: " + err.message);
    }
    // 'this' references the AWS.Response instance that represents the response
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + albumBucketName + "/";

    var photos = data.Contents.map(function(photo) {
      var photoKey = photo.Key;
      var photoUrl = bucketUrl + encodeURIComponent(photoKey);
      return getHtml([
        "<span>",
        "<div>",
        '<img style="width:128px;height:128px;" src="' + photoUrl + '"/>',
        "</div>",
        "<div>",
        "<span onclick=\"deletePhoto('" +
          albumName +
          "','" +
          photoKey +
          "')\">",
        "X",
        "</span>",
        "<span>",
        photoKey.replace(albumPhotosKey, ""),
        "</span>",
        "</div>",
        "</span>"
      ]);
    });
    var message = photos.length
      ? "<p>Click on the X to delete the photo</p>"
      : "<p>You do not have any photos in this album. Please add photos.</p>";
    var htmlTemplate = [
      "<h2>",
      "Album: " + albumName,
      "</h2>",
      message,
      "<div>",
      getHtml(photos),
      "</div>",
      '<input id="photoupload" type="file" accept="image/*">',
      '<button id="addphoto" onclick="addPhoto(\'' + albumName + "')\">",
      "Add Photo",
      "</button>",
      '<button onclick="listAlbums()">',
      "Back To Albums",
      "</button>"
    ];
    document.getElementById("app").innerHTML = getHtml(htmlTemplate);
  });
}

function addPhoto(albumName) {
  var files = document.getElementById("photoupload").files;
  if (!files.length) {
    return alert("Please choose a file to upload first.");
  }
  var file = files[0];
  var fileName = file.name;
  var albumPhotosKey = encodeURIComponent(albumName) + "/";

  var photoKey = albumPhotosKey + fileName;

  // Use S3 ManagedUpload class as it supports multipart uploads
  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: albumBucketName,
      Key: photoKey,
      Body: file
    }
  });

  var promise = upload.promise();

  promise.then(
    function(data) {
      alert("Successfully uploaded photo.");
      viewAlbum(albumName);
    },
    function(err) {
      return alert("There was an error uploading your photo: ", err.message);
    }
  );
}

function deletePhoto(albumName, photoKey) {
  s3.deleteObject({ Key: photoKey }, function(err, data) {
    if (err) {
      return alert("There was an error deleting your photo: ", err.message);
    }
    alert("Successfully deleted photo.");
    viewAlbum(albumName);
  });
}

function deleteAlbum(albumName) {
  var albumKey = encodeURIComponent(albumName) + "/";
  s3.listObjects({ Prefix: albumKey }, function(err, data) {
    if (err) {
      return alert("There was an error deleting your album: ", err.message);
    }
    var objects = data.Contents.map(function(object) {
      return { Key: object.Key };
    });
    s3.deleteObjects(
      {
        Delete: { Objects: objects, Quiet: true }
      },
      function(err, data) {
        if (err) {
          return alert("There was an error deleting your album: ", err.message);
        }
        alert("Successfully deleted album.");
        listAlbums();
      }
    );
  });
}
</script>   
  </body>
</html>





 --}}




{{-- HIHIHI --}}
{{-- <!DOCTYPE html>
<html>

<head>
    <title>AWS S3 File Upload</title>
    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.12.min.js"></script>
    <script src="https://sdk.amazonaws.com/js/aws-sdk-SDK_VERSION_NUMBER.js"></script>
</head>

<body>
    <input type="file" id="file-chooser" />
    <button id="upload-button">Upload to S3</button>
    <div id="results"></div>
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
    var results = document.getElementById('results');
    button.addEventListener('click', function() {

        var file = fileChooser.files[0];

        if (file) {

            results.innerHTML = '';
            var objKey = 'images/' + file.name;
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
        var prefix = 'images';
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
                results.innerHTML = objKeys;
            }
        });
    }
    </script>
</body>

</html> --}}
{{-- 

   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Document</title>
   </head>
   <body>
    <form method="post" enctype="multipart/form-data">
        <input type="file" id="files" />
    <input type="button" onclick="upload()" value="Upload to S3">
    <div id="results"></div>
</form>
    <script type="text/javascript">
        AWS.config.region = 'ap-southeast-1'; // Region
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'ap-southeast-1:f91781b7-2b9d-4220-9f02-39f0b6b69f43',
        });
        // var bucketName = 'meu-landingpage';
        var bucket = new AWS.S3({
        params: {
        Bucket: 'meu-landingpage'
        }
        });
       
        var file = document.getElementById('files');
        var button = document.getElementById('upload-button');
        var results = document.getElementById('results');
       
        function upload() {
            alert(file.files[0].name);
        var file = file.files[0];
        console.log(file.name);
       
        if (file) {
        results.innerHTML = '';
        var params = {
        Key: n + '.pdf',
        ContentType: file.type,
        Body: file
        };
        bucket.upload(params, function(err, data) {
        results.innerHTML = err ? 'ERROR!' : 'UPLOADED.';
        });
        } else {
        results.innerHTML = 'Nothing to upload.';
        }    }
       </script>
   </body>
      
   </html> --}}



   {{-- Code ok --}}

    
<!DOCTYPE html>
<html>
<head>
    <title>AWS S3 File Upload</title>
    <script src="https://sdk.amazonaws.com/js/aws-sdk-2.1.12.min.js"></script>
</head>
 
<body>
    <input type="file" id="file-chooser" />
    <button id="upload-button">Upload to S3</button>
    <div id="results"></div>

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
    var results = document.getElementById('results');
    button.addEventListener('click', function() {
        var file = fileChooser.files[0];
        if (file) {
            results.innerHTML = '';
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
                results.innerHTML = objKeys;
            }
        });
    }
    // function deleteObject(){

    // },
    // function deletePhoto(albumName, photoKey) {
    //     s3.deleteObject({ Key: photoKey }, function(err, data) {
    //         if (err) {
    //         return alert("There was an error deleting your photo: ", err.message);
    //         }
    //         alert("Successfully deleted photo.");
    //         listObjs(albumName);
    //     });
    //     }
    </script>
</body>
 
</html> 