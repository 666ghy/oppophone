define(["jquery","jquery-cookie"],function($){
    //node8-->oAa;Foo-->node9;node1--->oShapping,node2--->oSlide
    function shopping(node8,node9,node1,node2){
        
            $(node1).hover(function(){

                $(node2).stop(true).animate({
                right:0,
                }, 1000)
                
            },function(){
                $(node2).css("rigth","0");
            })
        $.ajax({
            type:"get",
            url:"data/shopping.json",
            success:function(arr){
                // footer
                console.log(arr);
            var footer1Arr=arr;
            var str01=``;
            str01+=`<div class="footerFirst">
            <h1>${footer1Arr[0].name}</h1>
            <h3>${footer1Arr[0].price}</h3>
            <img src="${footer1Arr[0].image}" alt="">
            <a href="" id="${footer1Arr[0].id}" class="aa">加入购物车</a>
            </div>`;
            for(var i=1;i<footer1Arr.length;i++){
                str01+=`<div class="footers">
                            <img src="${footer1Arr[i].image}" alt="">
                            <h3>${footer1Arr[i].name}</h3>
                            <h3>${footer1Arr[i].price}</h3>
                            <a href="" id="${footer1Arr[i].id}" class="aa">加入购物车</a>
                        </div>`;
            }
            $(node9).html(str01);
            $(node8[0]).addClass("active");
           
            },
            error:function(msg){
                console.log(msg);
            }
        })
        //开始写购物车！呦吼！！！
         /*
        将数据存储到cookie中
        1、cookie大小有限
        2、cookie只能存储字符串
        【注】做到只存储关键数据。[{id:id,num:1}]
      */
      $(node9).on("click",".aa",function(){
         var id=this.id;
         //判断是否第一次添加;
         var first=$.cookie("goods")==null?true:false;
        if(first){
            var arr=[{id:id,num:1}];
            $.cookie("goods",JSON.stringify(arr),{
                expires:7
            })
        }else{
            //不是第一次，判断之前是否添加过：
            var same=false;//假设之前没有添加过：
            var cookieArr=JSON.parse($.cookie("goods"));
            for(var i=0;i<cookieArr.length;i++){
                if(cookieArr[i].id===id){
                    cookieArr[i].num++;
                    same=true;
                    break;
                }
            }
            if(!same){
                var obj={id:id,num:1};
                cookieArr.push(obj);
            }
            $.cookie("goods",JSON.stringify(cookieArr),{
                expires:7
            }) 
        }
        console.log($.cookie("goods"));
        // sc_num();
         sc_msg();
         
         return false;
     }); 


     $(node2).on("click","#dot",function(){
         //页面删除：
         var id=$(this).closest(".box1").remove().attr("id");
         //cookie删除;
         var cookieArr=JSON.parse($.cookie("goods"));
         var index=cookieArr.findIndex(iterm=>iterm.id==id);
         cookieArr.splice(index, 1);
         if(cookieArr.length){
            $.cookie("goods", JSON.stringify(cookieArr), {
              expires: 7
            })
          }else{
            $.cookie("goods", null);
          }
         return false;
     })
     $(node2).on("click",".ad",function(){
         var id=$(this).closest(".box1").attr("id");
         var cookieArr=JSON.parse($.cookie("goods"));
         var index=cookieArr.findIndex(item=>item.id==id);
         if(this.innerHTML=="+"){
             cookieArr[index].num++;
         }else{
             cookieArr[index].num==1?alert("数为1,不能减少"):cookieArr[index].num--;
             //改变页面上的数量：
         }
         $(this).siblings("p").html(cookieArr[index].num);
             $.cookie("goods",JSON.stringify(cookieArr),{
                 expires:7
             })
         return false;
     })
        //右侧购物上商品的加载
      //1、购物车数据，都在cookie中id num
      //2、商品信息在，服务器上
    
      function sc_msg(){
        var cookieStr = $.cookie("goods");
        if(!cookieStr){
          return;
        }
        //1、请求商品数据
        $.ajax({
          type: 'get',
          url: 'data/shopping.json',
          success: function(arr){
              console.log(arr);
            //在cookie中取出数据
            var newArr = [];
            var cookieArr = JSON.parse(cookieStr);
            for(var i = 0; i < cookieArr.length; i++){
              for(var j = 0; j < arr.length; j++){
                if(arr[j].id == cookieArr[i].id){
                  arr[j].num = cookieArr[i].num;
                  newArr.push(arr[j]);
                  break;
                }
              }
            }
             console.log(newArr);
            let str = ``;
            for(var i = 0; i < newArr.length; i++){
              str += `
        <div id="${newArr[i].id}" class="box1">
            <img src="${newArr[i].image}" alt="">
            <a href="" id="dot" >*</a> 
            <div class="box2" >
                <a href="" class="ad">-</a>
                <p>${newArr[i].num}</p>
                <a href="" class="ad">+</a>
            </div>
        </div>
        
           `
            }
            $(node2).html(str);
          }
        })
    }
}
    return {
        shopping:shopping,
    }

})