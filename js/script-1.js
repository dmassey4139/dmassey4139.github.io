// script for home page

$(function () {

    function sleep(miliseconds) {
        var currentTime = new Date().getTime();

        while (currentTime + miliseconds >= new Date().getTime()) {
        }
    }

    //settings for slider
    var width = 500;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


    // declare variables
    var $leftBorder = $('#left-border');
    var $rightBorder = $('#right-border');
    var $middle = $('#middle');
    var $video = $('#banner-video');
    var $outerBox = $('#nav li a p');
    var $innerBox = $('#nav li ul li a p');
    var $menuButton = $('#menu-button');
    var $upArrow = $('#up-button');
    var $footer = $('#footer');

    // summon tendina
    /*$('#nav').tendina({
        onHover: true });*/

    // set widths and heights of borders and middle section
    //$video.css('width', ($(document).width() - ($leftBorder.width() + $rightBorder.width())));
    //$video.css('width', '400px');
    $video.css('height', '300px');
    $('#jean-banner-video').height(500);
    $middle.css('width', ($(document).width() - ($leftBorder.width() + $rightBorder.width())));
    $middle.css('margin-left', $leftBorder.width());
    $('#right-video-buffer').css('height', '300px');
    $('#jean-right-video-buffer').css('height', '500px');
    $('#right-slider-buffer').css('height', '500px');
    $('#right-youtube-buffer').css('height', '315px');

    $menuButton.sidr({
        displace: false
    });

    $menuButton.on('click', function(){
        if ($(this).hasClass('not-open'))
        {
            $(this).removeClass("not-open");
            $(this).addClass("open");
            $upArrow.removeClass("not-open");
            $upArrow.addClass("open");
        }
        else
        {
            $(this).removeClass("open");
            $(this).addClass("not-open");
            $upArrow.removeClass("open");
            $upArrow.addClass("not-open");
        }
    });

    //sleep(2000);
    //$leftBorder.css('height', $(document).height() - 200);
    //$rightBorder.css('height', $(document).height() - 200);
    //$middle.css('height', $(document).height() - 200);
    //$middle.css('top', $video.height() + 35);
    $outerBox.css('width', $leftBorder.width() - 4);
    $outerBox.css('height', "2em");
    $innerBox.css('width', $outerBox.width() / 2);
    $footer.height(300);
    $('#bottom-spacer').height(100);
    $leftBorder.height($middle.height());
    $rightBorder.height($middle.height());

    // code for the slider
    /*var $slider = $('.my-slider').unslider({
        autoplay: true,
        arrows: {
            prev: '<a class="unslider-arrow prev"><img src="./../media/left_arrow.svg" alt="Prev" width=20px /></a>',
            next: '<a class="unslider-arrow next"><img src="./../media/right_arrow.svg" alt="Next" width=20px /></a>',
            }
    });

    $slider.height(400);
    $slider.width(300);

    $('img.slide_pic').css('width', '300px');
    $('img').css('margin', '0 auto');
    $('img').css('display', 'block');

    $('.unslider-arrow.next').css('left', $slider.width() + 5);
    $('.unslider-arrow').css('top', $slider.height() / 2);

    $('.unslider-nav').css('left', (($slider.width() - $('.unslider-nav').width()) / 2)  + 'px');
    $('.unslider-nav').css('top', (($slider.height() + 20)  + 'px'));
    $slider.css('position', 'static');*/
});