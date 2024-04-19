jQuery(function($) {
    'use strict';

    // Start Menu JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.main-nav').addClass('menu-shrink');
            $('.main-nav').addClass('main-nav-scrolled');
        } else {
            $('.main-nav').removeClass('menu-shrink');
            $('.main-nav').removeClass('main-nav-scrolled');
        }
        if ($(this).scrollTop() > 50) {
            $('.contact-button').addClass('contact-button-scrolled');
        } else {
            $('.contact-button').removeClass('contact-button-scrolled');

        }
    });

    // Mean Menu JS
    // jQuery('.mean-menu').meanmenu({
    //     meanScreenWidth: "991"
    // });

    // Accordion JS
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion a').on('click', function(j) {
        var dropDown = $(this).closest('li').find('p');
        $(this).closest('.accordion').find('p').not(dropDown).slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });

    // Timer JS
    let getDaysId = document.getElementById('days');
    if (getDaysId !== null) {

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        let countDown = new Date('July 30, 2021 00:00:00').getTime();
        setInterval(function() {
            let now = new Date().getTime();
            let distance = countDown - now;

            document.getElementById('days').innerText = Math.floor(distance / (day)),
                document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
        }, second);
    };

    // Preloader JS
    jQuery(window).on('load', function() {
        jQuery(".loader").fadeOut(500);
    });

    // Back to Top JS
    $('body').append('<div id="toTop" class="back-to-top-btn"><i class="bx bx-up-arrow"></i></div>');
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, 900);
        return false;
    });

}(jQuery));
