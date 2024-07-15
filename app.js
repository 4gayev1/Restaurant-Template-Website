$('.home').owlCarousel({
    loop: true,
    items: 1,
    dots:false,
    animateOut: 'fadeOut',
    autoplay:true,
autoplayTimeout:3000
});


$('.tes').owlCarousel({
    loop: true,
    items: 1,
    animateOut: 'fadeOut'
});


AOS.init();


$(window).scroll(function(){
    $('nav').removeClass('mt-3',$(this).scrollTop()>50);
    $('.nav-main-div').toggleClass( "bg-dark",$(this).scrollTop()>50 );
})