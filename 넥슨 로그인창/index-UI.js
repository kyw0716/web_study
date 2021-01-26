$(function(){
    $('.menubtn').on('click',function(){
        $('#menu-space').css('left','0');
        $('body').css('background-color','rgba(0,0,0,60%)');
    });
});

$(function(){
    $('.fa-times').on('click',function(){
        $('#menu-space').css('left','-400px');
        $('body').css('background-color','rgb(235, 235, 235)');
    });
});