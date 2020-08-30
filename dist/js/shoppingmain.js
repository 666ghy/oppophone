require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        banner:"banner",
       shopping:"shopping"
       
    },
   shim:{
        "jquery-cookie":["jquery"],
        // 某模块不遵从AMD
        parabola:{
            exports:"_",
        },
   }

})

require(["shopping"],function(shopping){
    var oAa=document.querySelectorAll("#footer a");
    var Foo=document.getElementById("article");
    var oShapping=document.getElementById("shopping");
    var oSlide=document.getElementById("slideshopping");
    shopping.shopping(oAa,Foo,oShapping,oSlide);
    
})