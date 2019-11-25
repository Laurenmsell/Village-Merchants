'use strict'

// $(function() {

$('.slideshow').square1({
    animation: 'slide',
    transition_time: 2000,
    prev_next_nav: 'hover',
    dots_nav: 'hover'
});

// new fullpage('#fullpage', {
//           autoScrolling: true,
//           navigation: true,
//           navigationPosition: 'left',
//           navigationTooltips: ['index', 'about', 'buy', 'blog',]
//       })


function toggleIcon() {
    $('.icon').on('click', function(){
        $('.icon').toggleClass('active');
        $('.menu-mobile').slideToggle(300);
    })
}

function closeMobileMenu(){
    $('.menu-mobile').on('click', 'a', function(){
        $('.icon').trigger('click');
    })
}

function desktopMenu() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 && $(window).width() > 768) {
            $('header.desktop').fadeIn(500);
        } else {
            $('header.desktop').fadeOut(500);
        }
    })
}

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}





//when the page loads call toggleIcon;
$(toggleIcon);
$(closeMobileMenu);
$(desktopMenu);