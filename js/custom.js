$(function(){
//back to top//

$('.back-to-top').click(function(){
    $('html, body').animate({scrollTop:0}, 1000);
});

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 600){
        $('.back-to-top').fadeIn(500);
    }
    else{
        $('.back-to-top').fadeOut(500);
    }
    if(scrolling > 100){
        $('.nav').addClass('bg');
    }
    else {
        $('.nav').removeClass('bg');
    }
}); 
//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 80
            }, 1500);
            return false;
        }
    }
});

//preloader
$(window).on('load', function(){
    $('.preloader-start').delay(1500).fadeOut(500);

}); 
//counter
$('.counter').counterUp({
    delay: 5,
    time: 1500
});


});