define(["jquery","jquery-cookie"],function($){
    //oText-->node1;oPassword-->node2;p1-->node3

    function signIn(node1,node2,node3){
        $.ajax({
            type:"post",
            url:"signIn.php",
            data:{
                number:$(node1).val(),
                password:$(node2).val()
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
        signIn:signIn,
    }
})