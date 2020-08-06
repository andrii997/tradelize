import $ from  'jquery'
import '../../node_modules/slick-carousel/slick/slick'

$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        centerMode: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              centerMode: false,
            }
          }
        ]
      });

      $('.why-people-choose div .wrapp-block-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        variableWidth: true,
        adaptiveHeight: true,
        arrows: false,
        swipeToSlide: true
      });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        swipeToSlide: true
    });

    $('.slider-review').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.plans-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 20000,
                settings: "unslick"
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true
                }
            }
        ]
    });

    $('.slider-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 20000,
                settings: "unslick"
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.traders-network-left .title-text').on('click', function(){

        let left = $(this)[0].offsetLeft - 50;
        $(this).parent().css('transform', "translate(calc(50% - " + left + "px));");

    })

});