require.config({
    pashs:{
        jquery:"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        register:"register"
    },
    shim:{
        "jquery-cookie":["jquery"],
        parabola:{
            exports:"_",
    },
    }
})

require(["register"],function(register){
    var oText=document.getElementById("text");
    var oPassword=document.getElementById("password");
    var P1=document.getElementById("p1");
    register.register(oText,oPassword,p1);
})