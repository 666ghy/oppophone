require.config({
    paths:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        openbig:"openbig"
    },
    shim:{
        "jquery-cookie":["jquery"],
        parabola:{
            exports:"_",
        },
    }
})

require(["openbig"],function(big){
    
    var oLeft1=document.getElementById("left1");
    var oRight1=document.getElementById("right1");
   
    big.big(oLeft1,oRight1);
})