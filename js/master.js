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
    
    /** Yazar Slider */
    
    $.fn.yazarSlider = function(){
        var yazarUl = this.find('ul');
        var yazarLi = this.find('.yazi_spor');
        $('#next').click(function(){
            $(this).parent().find('i').removeClass('yazaractive');
            $(this).addClass('yazaractive');
            yazarLi.eq(0).stop().animate(
                {'margin-top':-420+'px'}
                ,500)
        })
        
        $('#prev').click(function(){
            $(this).parent().find('i').removeClass('yazaractive');
            $(this).addClass('yazaractive');
            yazarLi.eq(0).stop().animate(
                {'margin-top':0 +'px'}
                ,500)
        })
    }
    $('.yazarlar_spor').yazarSlider();
   
    /** Yazar Slider */
});

