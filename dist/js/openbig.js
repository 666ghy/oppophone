define(["jquery","jquery-cookie"],function($){
    //node1--->oLeft1;node2--->oRight1;
function big(node1,node2){
   
    $.ajax({
        type:"get",
        url:"data/openbig.json",
        success:function(arr){
            var arr2=arr[0];
            var str2=``;
            str2+=`<div class="one">
                <h2>${arr2[0].name}</h2>
                <p id="p1">${arr2[0].discribe1}</p>
                <h4>${arr2[0].discribe2}</h4>
                <a href="" id="a1">${arr2[0].discribe3}</a>
                <h1>${arr2[0].price}</h1><h3>${arr2[0].oldprice}</h3>
               
                <div class="one1">
                    <p>商品支持：
                        <span>花呗分期  &nbsp;&nbsp;12期免息 </span>
                        <a href="">以旧换新</a>
                    </p>
                </div>
            </div>
            <div class="two">
                <h3>颜色</h3>
                <article >
                    <a href="">蓝色星夜</a>
                    <a href="">月夜黑</a>
                    <a href="">雾月白</a>
                    <a href="">经典蓝</a>
                    <a href="">日出印象</a>
                </article>
            </div>
            <div class="three">
                <h3>配置</h3>
                <article>
                <a href="">12G+256G</a>
                <a href="">8G+128G</a>
                </article>
            </div>
            <div class="four">
                <h3>服务</h3>
                <article>
                    <a href="">碎屏保一年￥199</a>
                    <a href="">0享无忧$206</a>
                    <a href="">OPPO Care ¥349 </a>
                    <a href="">进液保一年 ¥179</a>
                    
                    <a href="">后盖保一年￥79</a>
                    <a href="">延长保半年￥79</a>
                    <a href="">延长保一年￥99</a>
                </article>
            </div>
            <div class="five">
                <h3>赠品</h3>
                <img src="${arr2[0].zengpin}" alt="">
                <p>布艺蓝牙音箱</p>    
            </div>
            
            <div class="six">
                <h3>选择数量</h3>
               <article>
                    <a href="">-</a>
                    <p>0</p>
                    <a href="">+</a>
               </article>
            </div>
            <div class="seven">
               <a href="">加入购物车</a>
               <a href="">立即购买</a>`;
            
             $(node2).html(str2);
            
            var arr1=arr[1];
            var str1=``;
                    str1+=`<div id="bigImg">
                                <div id="mark"> </div>
                                <img src="${arr1[0].bigImg1}" alt="">
                                <img src="${arr1[0].bigImg2}" alt="">
                                <img src="${arr1[0].bigImg3}" alt="">
                                <img src="${arr1[0].bigImg4}" alt="">
                            </div>
                                <div id="bigbox"> 
                                    <img src="${arr1[0].bigImg1}" alt="">
                                    <img src="${arr1[0].bigImg2}" alt="">
                                    <img src="${arr1[0].bigImg3}" alt="">
                                    <img src="${arr1[0].bigImg4}" alt="">
                                </div>
                        
                        <div class="miniImg">
                            <img src="${arr1[0].mini1}" alt="">
                            <img src="${arr1[0].mini2}" alt="">
                            <img src="${arr1[0].mini3}" alt="">
                            <img src="${arr1[0].mini4}" alt="">
                        </div>`;
            $(node1).html(str1); 
            // 图片选项卡+放大镜：
            var bigImgs=document.querySelectorAll("#bigImg img");
            var miniImgs=document.querySelectorAll(".miniImg img");
            var bigbox=document.getElementById("bigbox");
            var bigboxs=document.querySelectorAll("#bigbox img");
            var mark=document.getElementById("mark");
            //划入小图片：
            $(bigImgs[0]).css("display","block");
            for(var i=0;i<miniImgs.length;i++){
                miniImgs[i].index=i;
                $(miniImgs[i]).hover(function(){
                    for(var j=0;j<miniImgs.length;j++){
                        $(miniImgs[j]).css("opacity","0.5");
                        $(bigImgs[j]).css("display","none");
                        $(bigboxs[j]).css("display","none");
                    }
                    $(miniImgs[this.index]).css("opacity","1");
                    $(bigImgs[this.index]).css("display","block");
                    $(bigboxs[this.index]).css("display","block")
                },function(){
                    $(miniImgs[this.index]).css("opacity","1");
                    $(bigImgs[this.index]).css("display","block");
                    $(bigboxs[this.index]).css("display","block")
                })
            }
            //放大镜：
                $("#bigImg").mouseenter(function(){
                    $(mark).add(bigbox).show()   
                }).mouseleave(function(){
                    $(mark).add(bigbox).hide()   
                }).mousemove(function(e){
                    var l=e.clientX-$(this).offset().left-50;
                        l=Math.max(0,l);
                        l=Math.min(l,400);
                    var t=e.clientY-$(this).offset().top-50;
                        t=Math.max(0,t);
                        t=Math.min(400,t);
                    $(mark).css({
                        left:l,
                        top:t
                    })
                    $(bigboxs).css({
                        left:-2*l,
                        top:-2*t
                    })
                })
        },
        error:function(msg){
            console.log(msg);
        }
    })
}
return{
    big:big,
}
})