 document.addEventListener('DOMContentLoaded', function () {
 if (window.jQuery && jQuery.fn.slick) {

           if (window.jQuery && jQuery.fn.slick) {

        jQuery('.slider').each(function () {

            const $el = jQuery(this);

            $el.slick({
                slidesToShow: parseInt($el.attr('data-slides-desktop'), 10) || 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                dots: false,
                arrows: true,
                infinite: true,
                speed: 900,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        slidesToShow: parseInt($el.attr('data-slides-mobile'), 10) || 1
                    }
                }]
            });

        });
    }
    }
    });

