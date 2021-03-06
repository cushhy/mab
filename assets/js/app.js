$(document).ready(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    // Burger

    $('.header__burger').on('click', function () {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock')
    });

    // Smooth

    /* --------   Smooth scroll    ---------  */

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this)
        blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('nav a').removeClass('active');
        $this.addClass('active');

        $('html, body').animate({
            scrollTop: blockOffset
        }, 1000)
    })

    // Modal

    const modalCall = $('[data-modal]');
    const modalClose = $('[data-close]');

    modalCall.on('click', function (event) {

        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show')
    });

    modalClose.on('click', function (event) {

        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');
        let modalParent = $this.parents(modalId);

        modalParent.removeClass('show');
    });

    $('.nav__link ').on('click', function () {
        $('.header__menu ').removeClass('active');
        $('body').removeClass('lock');
        $('.header__burger').removeClass('active');

    });


});