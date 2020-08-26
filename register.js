define(["jquery","jquery-cookie"],function($){
//node1-->oText;node2-->oPassword;node3-->p1;
    function register(node1,node2,node3){
        $.ajax({
            type:"post",
            url:"../register.php",
            data:{
                number:$(node1).val(),
                password:$(node2).val(),
                createtime:new Date().getTime()
            },
            success:function(res){
                if(res.code){
                    $(node3).css("color","red");
                }else{
                     $(node3).css("color","green");
                }
                $(node3).css("display","block").html(res.msg);
            
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    return {
        register:register,
    }
})