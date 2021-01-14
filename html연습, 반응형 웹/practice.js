$(window).scroll(function () {
    h = $(document).scrollTop();
    if(h == 0 ){
        $('nav').css('background-color','none').css('border-bottom','none');
        $('.login_box').css('background-color','rgb(72, 72, 255)');
    }
});

$(function(){
    $('.login_box').on('click', function(){
        $('.login_page').removeClass('active');
    });
});

$(function(){
    $('.exit_icon').on('click', function(){
        $('.login_page').addClass('active');
    })
});

$(window).scroll(function () {
    h = $(document).scrollTop();
    if(h > 673){
        $('nav').css('background-color','rgb(102, 104, 107)').css('border-bottom','solid');
        $('.login_box').css('background-color','rgb(102, 104, 107)').css('border','none');
    }
});