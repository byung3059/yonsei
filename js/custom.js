$(function () {

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