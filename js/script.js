/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function() {  
    
    var header = $(".header");
    var altoSeccion1 = $(".prueba").outerHeight();
    var altoSeccion2 = $(".footer").outerHeight() + altoSeccion1;

    $(window).scroll(function(event) {
        height = $(event.target).scrollTop();
        if (height > 10 && height < altoSeccion1) {
            header.addClass("plata").removeClass("footer");
        } else if (height > altoSeccion1 && height < altoSeccion2) {
            header.addClass("verde").removeClass("plata zapallo");
        } else if (height > altoSeccion2) {
            header.addClass("zapallo").removeClass("verde");
        } else {
            header.removeClass("plata");
        }
    });
});
    

