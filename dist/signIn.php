<?php
  header('content-type:text/html;charset="utf-8"');
$responseData=array("code"=>0,"msg"=>"");
$number=$_POST["number"];
$password=$_POST["password"];
//简单验证：
if(!$number){
  $responseData["code"]=1;
  $responseData["msg"]="请输入手机号";
  echo json_encode($responseData);
  exit;
}

if(!$password){
  $responseData["code"]=2;
  $responseData["msg"]="请输入密码";
  echo json_encode($responseData);
  exit;
}

//高级判断：
//之前是否注册过：

//1.连接数据库：
$link=mysql_connect("127.0.0.1","root","123456");

//2.判断是否连接成功：
if(!$link){
  $responseData["code"]=3;
  $responseData["msg"]="服务器繁忙";
  echo json_encode($responseData);
  exit;
}

//3.设置访问字符集：
mysql_set_charset("utf8");
//4.选择访问数据库：
mysql_select_db("sinin");
//5.密码加密处理：
$str=md5(md5($password).'aidongdong');
//6.准备sql，判断是否登陆成功：
$sql="SELECT * FROM students WHERE number='{$number}' AND password='{$str}'";
$res=mysql_query($sql);
//取一行：
$row=mysql_fetch_assoc($res);

if($row){
  $responseData["code"]=0;
  $responseData["msg"]="登陆成功";
  echo json_encode($responseData);
}else{
  $responseData["code"]=4;
  $responseData["msg"]="用户名或密码错误";
  echo json_encode($responseData);
  exit;
}

mysql_close($link);
?>