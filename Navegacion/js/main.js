$(document).on('ready', function(){
    init();
});

function init()
{
    var width = $('.slider_container').width();
    $('.slider_controls li').on('click', handleClick);
    $('.slide').each(function(i,e) {
       $(e).css('width', width+'px')
    });
}

function handleClick()
{
    var slide_target = 0;
    if ($(this).parent().hasClass('slider_controls')) {
        slide_target = $(this).index();
    }
    $('.slideContainer').fadeOut('slow', function() {
        $(this).animate({
            'margin-left':-(slide_target * $('.slider_container').width()) + 'px'
        }, 'slow', function() {
            $(this).fadeIn();
        });
    });
}