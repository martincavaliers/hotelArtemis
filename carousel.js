'use strict'

var $carousel = $(".carousel")

$(document).ready(function(){
    $(".carousel-text").fadeIn(3000);

    $carousel.bind('slide.bs.carousel', function (e) {
        console.log('slide event!');
    });

    // Makes sure elements hidden on load
    $(".carousel-caption").children().removeClass("no-js");    
});