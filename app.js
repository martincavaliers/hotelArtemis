'use strict'

// Gets screensize of browser window on load
let screenSize = $(window).width();
// Makes sure correct size on load
if(screenSize > 982){
    $("#nav").css("height", "150px");  
}

$(document).ready(function(){    
    $(".carousel-text").fadeIn(3000);

    $("#email-sub-header, #email-sub-form").hide();

    // Makes sure elements hidden on load
    $(".carousel-caption").children().removeClass("no-js");
    
    // -----------Navbar Resizing---------------

    $(window).resize(function(){
        screenSize = $(window).width();
        if(screenSize > 982){
            $("#nav").css("height", "150px");  
        }else{
            $("#nav").css("height", "inherit");
        }
    });
    


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

    // -----------Directions Dropdown---------------
    // Car Directions
    $("#car-dropdown").click(function(){
        if($("#car-directions").css('display') === 'none'){
            $("#car-directions").show(1000);
        }else{
            $("#car-directions").hide(1000); 
        }
    });

    $("#public-transport-dropdown").click(function(){
        if($("#public-transport-directions").css('display') === 'none'){
            $("#public-transport-directions").show(1000);
        }else{
            $("#public-transport-directions").hide(1000); 
        }
    });
});