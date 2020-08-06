$(function(){

    $(".plan-toggle").click(function () {
        $(this).parent(".plan").toggleClass("open");
    });

    if ($(window).width() < 991) {
        $(".plan-toggle").click(function () {
            $(this).parent(".plan").toggleClass("open");
            $(".plan").toggleClass("open");
        });
    }

    $(".flow-radio").click(function () {
        $(".flow-radio").removeClass("active");
        $(this).addClass("active").find("input").attr( "checked" );
    });

    // FAQ
    $(".accordion .accordion-title").click(function () {
        $(".accordion .item").removeClass("open");
        $(this).parent(".item").toggleClass("open");
    });

    $(".tools-accordion .tools-title").click(function () {
        $(".tools-item").removeClass("active");
        $(this).parent(".tools-item").toggleClass("active");
    });

    $(".load-program").click(function (event) {
        event.preventDefault();
        console.log("j");
        $(this).parent(".center").parent(".program-list").find(".lessons-hidden").toggleClass("open");
        $(this).hide();
    });

    if($(".slider-mobile")) {
        if ($(window).width() < 1000) {
            $(".slider-mobile").addClass("mobile");
        } else {
            $(".slider-mobile").removeClass("mobile");
        }

        $(window).resize(function () {
            if ($(window).width() > 1000) {
                if ($(".slider-mobile").hasClass("mobile")) {
                    $(".slider-mobile").removeClass("mobile");
                    location.reload();
                }
            } else {
                if (!$(".slider-mobile").hasClass("mobile")) {
                    $(".slider-mobile").addClass("mobile");
                    location.reload();
                }
            }
        });
    }

    $(".flow .step .btn-next").click(function () {
        $(this).parent(".btn-container").parent(".content").parent(".step").removeClass("active").next().addClass("active");
    });

    $(".flow .step .flow-back").click(function () {
        $(this).parent(".content").parent(".step").removeClass("active").prev().addClass("active");
    });

    $(".flow .close, .flow .btn-close").click(function () {
        $(".flow").addClass("hidden");
    });

    $(".affiliate .modal-open").click(function () {
        $(".flow").removeClass("hidden");
    })
});


