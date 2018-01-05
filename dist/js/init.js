var typed_text;
var typed_text_options;
var enter_scroll;
var anchor_scroll;
var touchscreen = !!("ontouchstart" in document.documentElement);
$(document).ready(function(){
    $(window).on("load", function() {
        $('.preloader-overlay').fadeOut(function() {
            $(this).remove();
            typed_text = new Typed('#typed-area', typed_text_options);
        });
    });
    // handle touchscreen compatibility
    $('body').find('.touch-screen-compatible').each(function(){
        if(touchscreen && $(this).hasClass('hide-on-touch-screen') || !touchscreen && $(this).hasClass('show-on-touch-screen-only')){
            $(this).addClass("hide");
        }
        else if(touchscreen && $(this).hasClass('show-on-touch-screen') || !touchscreen && $(this).hasClass('hide-on-touch-screen-only')){
            $(this).removeClass("hide");
        }
    });
    typed_text_options = {
        strings: ["This is a website about JAY DE LIO^40", "This is a website about JAYDEN LIANG. ^4000", "Is he who you are looking for? ^4000"],
        typeSpeed: 80,
        backSpeed: 30,
        backDelay: 30,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        contentType: "text",
    };
    $('.button-collapse').sideNav();
    $('.parallax-container').height($(window).height());
    $('.parallax').parallax();
    anchor_scroll = new SmoothScroll('*[data-anchor]', { speed: 500, easing: 'easeOutCubic', header: '.navbar-fixed'});
    $('ul.tabs').tabs({onShow:function(e){
        var element = $("a[href='"+e.selector+"']");
        var selector = document.querySelector('#'+element.data("anchor"));
        anchor_scroll.animateScroll(selector);
    }});
    var scrollFire_options = [
    {selector: '#anchor-about', offset: -50, callback: function (el) {
        Materialize.toast("Keep scrolling to reveal more!", 2000 );
    }},
    {selector: '#about-container', offset: 50, callback: function (el) {
        // Materialize.showStaggeredList('#sns-icon-group');
        Materialize.fadeInImage('#about-container');
    }},
    {selector: '#skills-container', offset: 150, callback: function(el) {
        //start all progress bars
        // Materialize.showStaggeredList($(el));
        $("#skills-container .progress-bar").each(function() {
            var g = $(this).data("transitiongoal");
            var text = $(this).find(".text");
            $(this).data("progress");
            $(this).find(".bar").animate({
                width: g + "%"
            }, {
                duration: 1500,
                easing: "swing",
                step: function(e) {
                    $(text).text(Math.ceil(e) + '%')
                }
            })
        });
    }},
    {selector: '#projects-container', offset: 150, callback: function (el) {
        // Materialize.showStaggeredList('#sns-icon-group');
        Materialize.fadeInImage('#projects-container');
    }},
    {selector: '#sns-icon-group', offset: 50, callback: function (el) {
        // Materialize.showStaggeredList('#sns-icon-group');
        Materialize.fadeInImage('#sns-icon-group');
    }},
    {selector: '#sns-icon-group-mobile-view', offset: 50, callback: function (el) {
        // Materialize.showStaggeredList('#sns-icon-group');
        Materialize.fadeInImage('#sns-icon-group-mobile-view');
    }}
    ];
    Materialize.scrollFire(scrollFire_options);
    var enter_scroll = new SmoothScroll('#btn-enter', { speed: 500, easing: 'easeOutCubic', header: '.navbar-fixed'});
    $('#btn-enter').click(function(){
        var scrollOffset = $('#anchor-about').offset().top - $(window).height();
        enter_scroll.animateScroll(scrollOffset);
    });
    $('#btn_backtop').click(function(){
        anchor_scroll.animateScroll(0);
    });
});