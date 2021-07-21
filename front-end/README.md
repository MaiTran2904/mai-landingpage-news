# Project_Landing-Page-About-PNV-ME-U

-- 1. Tạo ra 2 folder để lưu trữ vào thao tác
-- 2. Folder back-end dùng laravel(xây dựng api và controler để xử lí)
-- 3. Folder fron-end dùng chia các component để build giao diện cho trang web
-- 4. Trong foler fron-end gồm các component đã chia theo layout có trước và thực hiện xây dựng không thêm sửa xóa.


-- 5. Các bước thực hiện.
-- Đối với folder back-end
+ $  git clone https://github.com/quanhoang123/Project_Landing-Page-About-PNV-ME-U.git
+ $ git ckeckout main để clone project zề (nếu nó ở bên nhánh master)

+ cd back-end/fron-end: Truy cập vào 2 folder để dùng:
+ Đối với /back-end
  1.  run composer install to generate depedencies in vendor folder
  2.  change .env.example to .env
  3.  run php artisan key:generate
  4.  configure .env
  5.  php artisan serve
+ Đối với /fron-end
  1. npm insall      : cài đặt gói # npm để khởi tạo server
  1. npm start


Hướng dẫn git branch
0. $ git branch : Kiểm tra nhánh trong dự án
* master
* main 
1. $ git branch namebranch : Tạo nhánh của mình
2. $ git checkout namebranch: Chuyển qua nhánh của mình
3. $ git add (file)
   $ git commit -m "content text" : Thực hiện commit trên nhánh mới
4. $ git log --pretty=oneline : Xem lịch sử commit 

=> Những câu git cơ bản:

Đẩy bài lên nhánh của mịnh:

1. $ git clone https://github.com/quanhoang123/Project_Landing-Page-About-PNV-ME-U.git
2. $ git branch : Kiểm tra nhánh trong dự án
    * master
    * main 
    $ git branch namebranch : Tạo nhánh của mình
    $ git checkout namebranch: Chuyển qua nhánh của mình
3. Thực hiện chỉnh sửa.
4. Ra folder Project_Landing-Page-About-PNV-ME-U:
+  $ git checkout yourbranch
+  $ git add (file)
+  $ git commit -m "your commit"
+  $ git push origin yourbranch (example: nhánh bạn tên là mai thì $ git push origin mai):
PNVD167+Administrator@PNVD167 MINGW64 /c/xampp/htdocs/Project_Landing-Page-About-PNV-ME-U (main ---> your branch need push not master or main)


