jQuery(document).ready(function ($) {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    // Product menu hover
    $('#productTab[data-mouse="hover"] a').hover(function(){
        $(this).tab('show');
    });
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
    var target = $(e.relatedTarget).attr('href');
    $(target).removeClass('active');
    })

    $('#prodCat[data-mouse="hover"] a').hover(function(){
        $(this).tab('show');
    });
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
    var target = $(e.relatedTarget).attr('href');
    $(target).removeClass('active');
    })
    
    // add activeclass

    $("a.nav-link").click(function () {
        $("a.nav-link").removeClass("active");
        $(this).addClass("active");   
    });

    // About menu hover
    $('#aboutTab[data-mouse="hover"] a').hover(function(){
    $(this).tab('show');
    });
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
    var target = $(e.relatedTarget).attr('href');
    $(target).removeClass('active');
    })

});
