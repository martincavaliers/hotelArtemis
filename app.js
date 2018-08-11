'use strict'

$(document).ready(function(){
    $(".carousel-text").fadeIn(3000);

    // Makes sure elements hidden on load
    $(".carousel-caption").children().removeClass("no-js");    
    
    // Navbar resizing
    $(document).scroll(function(){
        if($(document).scrollTop() >= 380){
            $("nav").css("height", "100px");
        }else{
            $("nav").css("height", "180px");  
        }
    });

    // -----------Email Subscription---------------
});