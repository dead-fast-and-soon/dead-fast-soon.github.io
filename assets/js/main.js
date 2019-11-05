
$(function() {

    $(window).scroll(function(event) {

        let scroll = $(this).scrollTop();
        let opacity = (scroll / 800);

        console.log(opacity);

        if( opacity >= 0 ) {

            $("#header").css('background', `rgba(0, 0, 0, ${ opacity })`);
        }
    });

    console.log('hello')
});

