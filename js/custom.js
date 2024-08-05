$(function () {

    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })

    $('.header .inner .gnb>ul>li>a').on('click', function (e) {
        $(this).parent().siblings().find('.sub').stop().slideUp();   // 메뉴 클릭하면 하나만 나오게

        if ($('.header .inner .gnb').hasClass('on')) {
            e.preventDefault(); // a링크 이벤트 없애기

            $(this).next().stop().slideToggle();
        }
    })

    $('.header .inner .gnb .sub>ul>li>a').on('click', function (e) {
        $(this).parent().siblings().find('.smenu').stop().slideUp();   // 메뉴 클릭하면 하나만 나오게


        if ($('.header .inner .gnb').hasClass('on')) {
            e.preventDefault(); // a링크 이벤트 없애기

            $(this).next().stop().slideToggle();
        } else ($('.header .gnb .sub').removeAttr('style'));

    })

    $('.header .inner .gnb .smenu>li>a').on('click', function (e) {

        e.preventDefault();
    })

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.header .mbtn').removeClass('on');
        $('.header .gnb>ul>li ul').removeAttr('style');
        $('.header .gnb .sub').removeAttr('style');
    })


    const main_banner_slide = new Swiper('.banner_slide', {
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            600: {
                slidesPerView: 2,
            },

            769: {
                slidesPerView: 5,
            }
        }
    })

    $('.main_banner .inner .arrows .prev').on('click', function () {
        main_banner_slide.slidePrev(400);
    });
    $('.main_banner .inner .arrows .next').on('click', function () {
        main_banner_slide.slideNext(400);
    });


    const main_calendar_slide = new Swiper('.calendar_slide', {
        loop: true,
        slidesPerView: 1,
        breakpoints: {

            600: {
                slidesPerView: 2,
            },
            769: {
                slidesPerView: 5,
            }
        },
    })

    $('.main_calendar .inner .arrows .prev').on('click', function () {
        main_calendar_slide.slidePrev(400);
    });
    $('.main_calendar .inner .arrows .next').on('click', function () {
        main_calendar_slide.slideNext(400);
    });




    $('.main_notice .tap_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_notice .inner .left .notice_content>ul')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')


        $(this).parent().addClass('on').siblings().removeClass('on')
    })


    const main_research_slide = new Swiper('.main_research_slide', {

        loop: true,

        slidesPerView: 2,
        spaceBetween: 30,

        breakpoints: {
            769: {
                slidesPerView: 4,
            }
        },
    })

    $('.main_research_dots li').on('click', function () {
        let idx = $(this).index();

        main_research_slide.slideToLoop(idx, 400);
    })

});