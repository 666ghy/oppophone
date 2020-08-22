define(["jquery","jquery-cookie"],function($){                                                                                                                                                                                                                      
    // node1--->ul;node2--->ol;node3--->fig;node4--->oNav;oA-->node5;oMa1-->node6,oMa2--->node7;
    function banner(node1,node2,node3,node4,node5,node6,node7){
        $.ajax({
            type:"get",
            url:"data/data.json",
            success:function(arr){
               
                // 轮播图片：
                var banerArr=arr[0];
                var str1=``;
                var str2=``;
                var str3=``;
               for(var i=0;i<banerArr.length;i++){
                str1+=`<img src="${banerArr[i].image}" id=${banerArr[i].id} alt="">
                `;
                str3+=` <div id="div${banerArr[i].id}">
                <h1>${banerArr[i].name}</h1>
                <h3>${banerArr[i].character}<h3>
                <button>立即购买</button>
            </div>`;
                str2+=`<li id=${banerArr[i].id}></li>`;
            }
               str1+=`<img src="${banerArr[0].image}" id=${banerArr[0].id} alt="">`;
               str3+=`<div id="div${banerArr[0].id}">
               <h1>${banerArr[0].name}</h1>
               <h3>${banerArr[0].character}</h3>
               <button>立即购买</button>
           </div> `;
               $(node1).html(str1);
               
               $(node2).html(str2);
               $(node3).html(str3);
            // nav图片：
            // 第一个:
            var naveArr1=arr[1];
            var str11=``;
            for(var i =0;i<naveArr1.length;i++){
                str11+=`<div id="${naveArr1[i].id}">
                          <img src="${naveArr1[i].image}" alt="">
                          <p>${naveArr1[i].name}</p>
                     </div>`;
            }
            $(node4[0]).html(str11);
            
            // 第二个：
            var naveArr2=arr[2];
            var str22=``;
            for(var i =0;i<naveArr2.length;i++){
                str22+=`<div id="${naveArr2[i].id}">
                          <img src="${naveArr2[i].image}" alt="">
                          <p>${naveArr2[i].name}</p>
                     </div>`
            }
            $(node4[1]).html(str22);
            console.log($(node4[1]).html(str22));
            // 第三个:
            var naveArr3=arr[3];
            var str33=``;
            for(var i =0;i<naveArr3.length;i++){
                str33+=`<div id="${naveArr3[i].id}">
                          <img src="${naveArr3[i].image}" alt="">
                          <p>${naveArr3[i].name}</p>
                     </div>`
            }
            $(node4[2]).html(str33);
            // 第四个:
            var naveArr4=arr[4];
            var str44=``;
            for(var i =0;i<naveArr4.length;i++){
                str44+=`<div id="${naveArr4[i].id}">
                          <img src="${naveArr4[i].image}" alt="">
                          <p>${naveArr4[i].name}</p>
                     </div>`
            }
            $(node4[3]).html(str44);
            // 第五个:
            var naveArr5=arr[5];
            var str55=``;
            for(var i =0;i<naveArr5.length;i++){
                str55+=`<div id="${naveArr5[i].id}">
                          <img src="${naveArr5[i].image}" alt="">
                          <p>${naveArr5[i].name}</p>
                     </div>`
            }
            $(node4[4]).html(str55);
            console.log($(node4[4]).html(str55));
            for(var i=0;i< node5.length;i++){
                node5[i].index=i;
                $(node5[i]).hover(function(){
                    for(var j=0;j<node5.length;j++){
                        $(node5[j]).removeClass("active");
                        $(node4[j]).css("display","node");
                    }
                    $(node5[this.index]).addClass("active");
                    $(node4[this.index]).slideDown(1000,function(){ $(node4[this.index]).css("display","block")});
                    
                },function(){
                    $(node4[this.index]).slideUp(1000,function(){$(node4[this.index]).css("display","none")});
                })
               
            } 

            


            var oLis=document.getElementsByTagName("li");
            var iNow=0;
            var iMow=0;
            var timer=null;
            
            // 划入划出:
            /* $(node1).mouseenter(function(){
                clearInterval(timer);
            }).mouseleave(function(){
                timer=setInterval(function(){
                    iNow++;
                    tab();
                },2000);
            });
 */
            // 自动轮播
            timer=setInterval(function(){
                
                iNow++;
               
                iMow=iNow;
                tab();
                
            },3000);

            $(node2).on("click","li",function(){
                $(this).addClass("active").siblings().removeClass("active");
                iNow=$(this).attr("id")-1;
                iMow=iNow;

               
            })
             function tab(){
                if(iNow==6){
                    $(oLis).eq(0).addClass("active").siblings().removeClass("active");
                }
                    $(oLis).eq(iNow).addClass("active").siblings().removeClass("active");
               
                if(iNow==2){
                    $(node5).css("color","gainsboro");
                }else{
                    $(node5).css("color","black");
                }
                
                   
                $(node1).animate({left:-1440*iNow},1000,function(){
                   
                     if(iNow==6){
                         iNow=0;
                         $(node1).css("left",0);
                     } 
                    
                     $(node3).css("display","block");
                     $(node3).animate({left:-1440*iMow},500,function(){
                       
                      
                         if(iMow==6){
                             iMow=0;
                             $(node3).css("left",0);
                         }
                        
                     })
                     
                })
            }

            // 下面的大图：
            var main1Arr=arr[6];
            var str111=``;
            for(var i=0;i<main1Arr.length;i++){
                str111+=`<div class="box1">
                                
                                <div class="left1">  
                                    <h3>${main1Arr[i].name}</h3>
                                    <h1>${main1Arr[i].character}</h1> 
                                    <div class="minbox">
                                    <input type="radio" name="lili" checked>
                                    <input type="radio" name="lili" >
                                    <input type="radio" name="lili" >
                                    <input type="radio" name="lili" >
                                    </div>
                                    <h3>${main1Arr[i].price}</h3>
                                    <button>立即购买</button>
                                </div>
                                <div class="rigth1> 
                                    <img src="${main1Arr[i].image}" alt="">
                                </div>
                        </div>`;
            }
            $(node6).html(str111);
            // 再下面的图：
            var main2Arr=arr[7];
            var str222=``;
            for(var i=0;i<main2Arr.length-1;i+=2){
                str222+=`<div class="box2">
                            <div class="left2"> 
                                <img src="${main2Arr[i].image}" alt="">  
                                <h3>${main2Arr[i].name}</h3>
                                <h1>${main2Arr[i].character}</h1> 
                                <input type="radio" name="lili" checked>
                                <input type="radio" name="lili" >
                                <input type="radio" name="lili" >
                                <h3>${main2Arr[i].price}</h3>
                            </div>
                            <div class="right2"> 
                                <img src="${main2Arr[i+1].image}" alt="">  
                                <h3>${main2Arr[i+1].name}</h3>
                                <h1>${main2Arr[i+1].character}</h1> 
                                <input type="radio" name="lili" checked>
                                <input type="radio" name="lili" >
                                <input type="radio" name="lili" >
                                <h3>${main2Arr[i+1].price}</h3>
                            </div>
                        </div>`;
            }
            $(node7).html(str222);
           },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    return {
        banner:banner,
    }
})