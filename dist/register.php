<?php
  header('content-type:text/html;charset="utf-8"');
$responseData=array("code"=>0,"msg"=>"");
//将传进来的数据全部取出：
$number=$_POST["number"];
$password=$_POST["password"];
$createtime=$_POST["createtime"];
//后台，进行一个简单的验证
if(!$username){
    $responseData['code'] = 1;
    $responseData['msg'] = "用户名不能为空";
    echo json_encode($responseData);
    exit;
  }

  if(!$password){
    $responseData['code'] = 2;
    $responseData['msg'] = "密码不能为空";
    echo json_encode($responseData);
    exit;
  }
  //高级判断：

//1.连接数据库：
$link=mysql_connect("127.0.0.1","root","123456");
//2.判断是否连接成功：
if(!$link){
    $responseData['code'] = 3;
    $responseData['msg'] = "服务器忙";
    echo json_encode($responseData);
    exit; //退出程序
}
//3、设置访问字符集
  mysql_set_charset("utf8");

  //4、选择访问的数据库
  mysql_select_db("sinin");


  //5、准备sql 判断之前是否注册过
  $sql = "SELECT * FROM students WHERE number='{$number}'";

  //6、发送
  $res = mysql_query($sql);

  //取出一行
  $row = mysql_fetch_assoc($res);

  if($row){
    $responseData['code'] = 4;
    $responseData['msg'] = "用户名已存在";
    echo json_encode($responseData);
    exit;
  }

  //密码加密处理
  $str = md5(md5($password).'aidongdong');

  $sql2 = "INSERT INTO students(number,password,createtime) VALUES('{$number}','{$str}',{$createtime})";

  $res = mysql_query($sql2);

  if($res){
    $responseData["msg"] = "注册成功";
    echo json_encode($responseData);
  }else{
    $responseData['code'] = 5;
    $responseData['msg'] = "注册失败";
    echo json_encode($responseData);
    exit;
  }

  mysql_close($link);

?>
