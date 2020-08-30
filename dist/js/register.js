define(["jquery","jquery-cookie"],function($){
//node1-->oText;node2-->oPassword;node3-->p1;node4-->oButton;
    function register(node1,node2,node3,node4){
        $(node4).click(function(){
            $.ajax({
                type:"post",
                url:"register.php",
                data:{
                    number:$(node1).val(),
                    password:$(node2).val(),
                    createtime:new Date().getTime()
                },
                success:function(obj){
                    var obj = JSON.parse(obj)
                    if(obj.code){
                        $(node3).css("color","red");
                    }else{

                        $(node3).css("color","green");
                        setTimeout(function(){
                            location.assign("signIn.html");
                         },500)
                    }
                    $(node3).html(obj.msg);
               
                },
                error:function(msg){
                    console.log(msg);
                }
            })
            return false;
        })
    }
    return {
        register:register,
    }
})