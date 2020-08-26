require.config({
    pashs:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        signIn:"signIn"
    },
    shim:{
        "jquery-cookie":["jquery"],
        parabola:{
            exports:"_",
    },
    }
})

require(["signIn"],function(signIn){
    var oText=document.getElementById("text");
    var oPassword=document.getElementById("password");
    var P1=document.getElementById("p1");
    signIn.signIn(oText,oPassword,p1);
})