// repeated variables
let $window = $(window);
let $root = $('html, body');

$(document).ready(function () {
    colorScheme();
    borderColor();
    smoothScroll();
    loadImage();
    AOS.init();
});

// $window.on("load", (function() {
//     $("#overlayer").delay(500).fadeOut('slow');
//     $(".loader").delay(1000).fadeOut('slow');
// }));

$window.on('scroll', function () {
    headerSticky();
    skills();
    ChangeColor();
});

// Changing from light mode to dark mode
function colorScheme(){
    let $darkLogo = $('.dark-logo');
    $('.color-scheme').click(function() {
        $("body").toggleClass('arshia-dark');
        $('.color-scheme').removeClass('d-none').addClass('d-inline-block');
        $(this).removeClass('d-inline-block').addClass('d-none');
    });
}
function smoothScroll(){
    $('.header .navbar-nav a').on('click', function(event) {
        let $anchor = $(this);
        $root.stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutQuart');
        event.preventDefault();
        $(".navbar-collapse").collapse('hide');
    });
}

// function to make header stick to the page when scrolling down
function headerSticky(){
    if ($window.scrollTop() > 100) {
        $('#header').addClass('header-sticky');
    } else {
        $('#header').removeClass('header-sticky');
    }
}

function borderColor() {
    let allDivs = document.getElementsByClassName('timeline-border');

    for( let i =0; i < allDivs.length; ++i )
    {
        let color = allDivs[i].getAttribute('data-color');
        allDivs[i].style.borderLeftColor = "" + color + "";
    }
}
function loadImage() {
    let image = document.images[14];
    let downloadingImage = new Image();
        downloadingImage.onload = function(){
        image.src = this.src;   
    };
    downloadingImage.src = "./../assets/image/project1.gif";
}

// Form to submit to my email 

function sendEmail() {
    if(!name){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Name is  required');
    } else if(!email){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Email is  required');
    } else if(!validateEmail(email)){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Email is not valid');
    } else if(!subject){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Subject is  required');
    }else if(!comments){
        $('#message').toast('show').addClass('bg-danger').removeClass('bg-success');
        $('.toast-body').html('Comments is  required');
    }
}








