$(function () {

    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })

    $('.header .inner .gnb li button').on('click', function () {
        $('.header .inner .gnb li button').toggleClass('on')
    })

    const main_banner_slide = new Swiper('.banner_slide', {
        loop: true,
        slidesPerView: 2,
        breakpoints: {
            768: {
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
        slidesPerView: 2,
        breakpoints: {
            768: {
                slidesPerView: 5,
            }
        }
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

        effect: 'fade',
        fadeEffect: { crossFade: true, },

        on: {
            slideChangeTransitionStart: function () {
                $('.main_research .inner .main_research_dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    })

    $('.main_research_dots li').on('click', function () {
        let idx = $(this).index();

        main_research_slide.slideToLoop(idx, 400);
    })

});