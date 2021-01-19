$(function(){
    $('.menu_overflow_btn').on('click', function(){
        $('.menu_overflow').toggleClass('active');
    });
});

$(function(){
    $('main').on('click', function(){
        $('.menu_overflow').addClass('active');
    });
});

$(function(){
    $('.menu_btn').on('click',function(){
        $('.login_page_overflow').removeClass('active');
    })
})

$(function(){
    $('.login_page_next_box').on('click',function(){
        $('.login_page_overflow').addClass('active');
    })
})