/// <reference path="../typings/jquery/jquery.d.ts" />
$(function() {

    $('#sizetext').text($(window).innerWidth());
    $(window).resize(function() {
        $('#sizetext').text($(window).innerWidth());
    });


    /** Spor Slider */
    $.fn.sporSlider = function() {
        var slideUl = this.find('ul');
        var sliderLi = slideUl.find('li');
        var sliderLiWidth = sliderLi.width();
        slideUl.width(sliderLiWidth * sliderLi.length + 20)
        var indicator = this.parent().find('.sporSliderIndicator ul li');
        var intervalIndex = 0;
        var autoInterval = null;
        
        indicator.hover(function() {
            stopInterval();
            var indicatorIndex = $(this).index();
            intervalIndex = indicatorIndex;
            sliderLi.not(' :eq(' + indicatorIndex + ')').fadeOut(100);
            sliderLi.eq(indicatorIndex).fadeIn(100);
        });
        indicator.mouseleave(function() {
            startInterval();
        })
        startInterval();
        function stopInterval() {
            clearInterval(autoInterval);
        }
        function startInterval() {
           autoInterval  = setInterval(function() {
                if (intervalIndex == sliderLi.length) {
                    intervalIndex = 0;
                    sliderLi.not(' :eq(' + intervalIndex + ')').fadeOut(100);
                    sliderLi.eq(intervalIndex).fadeIn(100);
                }
                sliderLi.not(' :eq(' + intervalIndex + ')').fadeOut(100);
                sliderLi.eq(intervalIndex).fadeIn(100);
                intervalIndex += 1;
            }, 3000)
        }
    }
    $('.sporSlide').sporSlider();
    /** Spor Slider */
});

