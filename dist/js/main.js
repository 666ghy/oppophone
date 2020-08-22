require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        banner:"banner",
        signIn:"signIn"
       
    },
   shim:{
        "jquery-cookie":["jquery"],
        // 某模块不遵从AMD
        parabola:{
            exports:"_",
        },
   }

})


require(["banner","signIn"],function(banner,signIn){
    
    var oUl=document.getElementById("banner-img");

    var oOl=document.getElementById("banner-Btn");
    var Fig=document.getElementById("fig");
    var oNav=document.getElementsByTagName("nav");
    var oA=document.querySelectorAll("section a");
    var oMa1=document.getElementById("main1");
    var oMa2=document.getElementById("main2");
    //轮播图：
    banner.banner(oUl,oOl,Fig,oNav,oA,oMa1,oMa2);
    signIn.signIn();
})