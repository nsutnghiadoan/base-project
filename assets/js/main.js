(function ($) {
    var _duration = 1000,
        _easing = 'easeOutCubic',
        _width = $(window).width(),
        _spmode = 750;

    if(_width <= _spmode){
    }
    // loading after
    window.onload = function() {
    }
    //resize after
    window.onresize = function () {
        _width = $(window).width();
        if(_width <= _spmode){
        }else{
        }
    }
    //scroll after
    window.onscroll = function () {
    }
})(jQuery);
