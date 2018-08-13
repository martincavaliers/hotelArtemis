'use strict'

$(document).ready(function(){
    $(".carousel-text").fadeIn(3000);

    $("#email-sub-header, #email-sub-form").hide();

    // Makes sure elements hidden on load
    $(".carousel-caption").children().removeClass("no-js");    
    
    // // Navbar resizing
    // $(document).scroll(function(){
    //     if($(document).scrollTop() >= 380 && $(document).width() > 993){
    //         $("nav").css("height", "100px");
    //     }else{
    //         $("nav").css("height", "180px");  
    //     }
    // });

    // -----------Email Subscription---------------
    
    if(window.location.pathname == '/Users/martincoutts5/Documents/Web%20Dev%20Projects/hotelArtemis/index.html'){
        $(document).scroll(function(){
            if($(document).scrollTop() >= 2700){
                $("#email-sub-header, #email-sub-form").fadeIn(3200);
            }
        }); 
    }else{
        $("#email-sub-header, #email-sub-form").show();
    }
});