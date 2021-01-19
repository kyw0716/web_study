$(window).scroll(function(){
    h = $(document).scrollTop();
    if(h == 0){
        $('.nav_bar').css('background-color','white');
        $('.nav_menu').css('background-color','white');
        $('.nav_menu').css('color','black').css('font-weight','normal');
        $('.fas').css('color','black');
        $('.dropdown1').css('background-color','white');
        $('.dropdown2').css('background-color','white');
        $('.dropdown3').css('background-color','white');
        $('.dropdown4').css('background-color','white');
        $('.right_dropdown').css('background-color','white');
        $('.dropdown1 a').css('color','black');
        $('.dropdown2 a').css('color','black');
        $('.dropdown3 a').css('color','black');
        $('.dropdown4 a').css('color','black');
        $('.right_dropdown a').css('color','black');
    }
    else if(h > 0) {
        $('.nav_bar').css('background-color','black');
        $('.nav_menu').css('background-color','black');
        $('.nav_menu').css('color','white').css('font-weight','bold');
        $('.fas').css('color','white');
        $('.dropdown1').css('background-color','black');
        $('.dropdown2').css('background-color','black');
        $('.dropdown3').css('background-color','black');
        $('.dropdown4').css('background-color','black');
        $('.right_dropdown').css('background-color','black');
        $('.dropdown_menu').css('color','white');
    }
})