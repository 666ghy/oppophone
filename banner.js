define(["jquery","jquery-cookie"],function($){                                                                                                                                                                                                                      
    // node1--->ul;node2--->ol;node3--->fig;node4--->oNav;oA-->node5;oMa1-->node6,oMa2--->node7;node8-->oAa;Foo-->node9
    function banner(node1,node2,node3,node4,node5,node6,node7,node8,node9){
        $.ajax({
            type:"get",
            url:"data/data.json",
            success:function(arr){
               //登录注册：
               
                var str0=`
                        &#xe60c;
                        <div id="box1">
                            <a href="">购物车</a>
                            <a href="register.html">注册</a>
                            <a href="signIn.html">登录</a>
                        </div>`;
               $(node5[9]).html(str0);
               var box1=document.getElementById("box1");
               $(node5[9]).click(function(){
                $(box1).slideDown(500,function(){
                    $(box1).css("display","block");
                })
                $(node5[9]).click(function(){
                    $(box1).css("display","none");
                })
               })

            
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
                <a href="">立即购买</a>
            </div>`;
                str2+=`<li id=${banerArr[i].id}></li>`;
            }
               str1+=`<img src="${banerArr[0].image}" id=${banerArr[0].id} alt="">`;
               str3+=`<div id="div${banerArr[0].id}">
               <h1>${banerArr[0].name}</h1>
               <h3>${banerArr[0].character}</h3>
               <a href="">立即购买</a>
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
                         if(iMow==2){
                            $(node3).find("div").css("color","gainsboro");
                        }else{
                            $(node3).find("div").css("color","black");
                        }
                        
                     })
                     
                })
            }

            // 下面的大图：
            var main1Arr=arr[6];
            var str111=``;
            for(var i=0;i<main1Arr.length;i++){
                str111+=`<div class="box1">
                                <img src="${main1Arr[i].image}" alt="">
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
                                    <a href="openbig.html">立即购买</a>
                                </div>
                                
                                   
                                
                        </div>`;
            }
            $(node6).html(str111);
            $(node6).find('.box1').eq(1).find(".left1").css("left","0");
            $(node6).find('.box1').eq(2).find(".left1").css("color","white");

            // 再下面的图：
            var main2Arr=arr[7];
            var str222=``;
            for(var i=0;i<main2Arr.length-1;i+=2){
                str222+=`<div class="box2">
                            <div class="left2"> 
                                <img src="${main2Arr[i].image}" alt="">  
                                <h3>${main2Arr[i].name}</h3>
                                <h1>${main2Arr[i].character}</h1> 
                                <div class="minbox">
                                <input type="radio" name="lili" checked>
                                <input type="radio" name="lili" >
                                <input type="radio" name="lili" >
                                </div>
                                <h2>${main2Arr[i].price}</h2>
                            </div>
                            <div class="right2"> 
                                <img src="${main2Arr[i+1].image}" alt="">  
                                <h3>${main2Arr[i+1].name}</h3>
                                <h1>${main2Arr[i+1].character}</h1> 
                                <div class="minbox">
                                <input type="radio" name="lili" checked>
                                <input type="radio" name="lili" >
                                <input type="radio" name="lili" >
                                </div>
                                <h2>${main2Arr[i+1].price}</h2>
                            </div>
                        </div>`;
            }
            $(node7).html(str222);


            // footer
            var footer1Arr=arr[8];
            var str01=``;
            str01+=`<div class="footerFirst">
            <h1>${footer1Arr[0].name}</h1>
            <h3>${footer1Arr[0].price}</h3>
            <img src="${footer1Arr[0].image}" alt="">
        </div>`;
            for(var i=1;i<footer1Arr.length;i++){
                str01+=`<div class="footers">
                            <img src="${footer1Arr[i].image}" alt="">
                            <h3>${footer1Arr[i].name}</h3>
                            <h3>${footer1Arr[i].price}</h3>
                           
                        </div>`;
            }
                   
            $(node9[0]).html(str01);
            var footer2Arr=arr[9];
            var str02=``;
            str02+=`<div class="footerFirst">
                    <h1>${footer2Arr[0].name}</h1>
                    <h3>${footer2Arr[0].price}</h3>
                    <img src="${footer2Arr[0].image}" alt="">
                </div>`;
            for(var i=1;i<footer2Arr.length;i++){
                str02+=`<div class="footers">
                            <img src="${footer2Arr[i].image}" alt="">
                            <h3>${footer2Arr[i].name}</h3>
                            <h3>${footer2Arr[i].price}</h3>
                           
                        </div>`;
            }
                    
            $(node9[1]).html(str02);
            var footer3Arr=arr[10];
            var str03=``;
            str03+=`<div class="footerFirst">
            <h1>${footer3Arr[0].name}</h1>
            <h3>${footer3Arr[0].price}</h3>
            <img src="${footer3Arr[0].image}" alt="">
        </div>`;
            for(var i=1;i<footer3Arr.length;i++){
                str03+=`<div class="footers">
                            <img src="${footer3Arr[i].image}" alt="">
                            <h3>${footer3Arr[i].name}</h3>
                            <h3>${footer3Arr[i].price}</h3>
                            
                        </div>`;
            }
                   
            $(node9[2]).html(str03);
            // 
            var footer4Arr=arr[11];
            var str04=``;
            str04+=`<div class="footerFirst">
            <h1>${footer4Arr[0].name}</h1>
            <h3>${footer4Arr[0].price}</h3>
            <img src="${footer4Arr[0].image}" alt="">
        </div>`;
            for(var i=1;i<footer4Arr.length;i++){
                str04+=`<div class="footers">
                            <img src="${footer4Arr[i].image}" alt="">
                            <h3>${footer4Arr[i].name}</h3>
                            <h3>${footer4Arr[i].price}</h3>
                          
                        </div>`;
            }
                   
            $(node9[3]).html(str04);
            // 
            var footer5Arr=arr[12];
            var str05=``;
            str05+=`<div class="footerFirst">
            <h1>${footer5Arr[0].name}</h1>
            <h3>${footer5Arr[0].price}</h3>
            <img src="${footer5Arr[0].image}" alt="">
        </div>`;
            for(var i=1;i<footer5Arr.length;i++){
                str05+=`<div class="footers">
                            <img src="${footer5Arr[i].image}" alt="">
                            <h3>${footer5Arr[i].name}</h3>
                            <h3>${footer5Arr[i].price}</h3>
                          
                        </div>`;
            }
                   
            $(node9[4]).html(str05);
            // 
            var footer6Arr=arr[13];
            var str06=``;
            str06+=`<div class="footerFirst">
            <h1>${footer6Arr[0].name}</h1>
            <h3>${footer6Arr[0].price}</h3>
            <img src="${footer6Arr[0].image}" alt="">
        </div>`;
            for(var i=1;i<footer6Arr.length;i++){
                str06+=`<div class="footers">
                            <img src="${footer6Arr[i].image}" alt="">
                            <h3>${footer6Arr[i].name}</h3>
                            <h3>${footer6Arr[i].price}</h3>
                           
                        </div>`;
            }
                   
            $(node9[5]).html(str06);
            // 
            var footer7Arr=arr[14];
            var str07=``;
            str07+=`<div class="footerFirst">
            <h1>${footer7Arr[0].name}</h1>
            <h3>${footer7Arr[0].price}</h3>
            <img src="${footer7Arr[0].image}" alt="">
        </div>`;
            for(var i=1;i<footer7Arr.length;i++){
                str07+=`<div class="footers">
                            <img src="${footer7Arr[i].image}" alt="">
                            <h3>${footer7Arr[i].name}</h3>
                            <h3>${footer7Arr[i].price}</h3>
                            
                        </div>`;
            }
                   
            $(node9[6]).html(str07);
            // 
            var footer8Arr=arr[15];
            var str08=``;
            str08+=`<div class="footerFirst">
            <h1>${footer8Arr[0].name}</h1>
            <h3>${footer8Arr[0].price}</h3>
            <img src="${footer8Arr[0].image}" alt="">
        </div>`;
            for(var i=1;i<footer8Arr.length;i++){
                str08+=`<div class="footers">
                            <img src="${footer8Arr[i].image}" alt="">
                            <h3>${footer8Arr[i].name}</h3>
                            <h3>${footer8Arr[i].price}</h3>
                           
                        </div>`;
            }
                   
            $(node9[7]).html(str08);


            // 选项卡：
             $(node8[0]).addClass("active");
            $(node9[0]).css("display","block");  
            for(var i=0;i< node8.length;i++){
                node8[i].index=i;
                $(node8[i]).hover(function(){
                    for(var j=0;j<node8.length;j++){
                        $(node8[j]).removeClass("active");
                        $(node9[j]).css("display","none");
                    }
                    $(node8[this.index]).addClass("active");
                    $(node9[this.index]).css("display","block");
                    
                },function(){
                   /*  $(node9[this.index]).css("display","none"); */
                    $(node8[this.index]).removeClass("active");
                })
               
            } 
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