$('.questions__item').click(function() {
    $('.questions__item-info:not(.closed)').addClass('closed');
    $('.question-arrow').removeClass('active');
    if ( $(this).children().last().hasClass('closed') ) {
        $(this).find(".questions__item-info").removeClass('closed');
        $(this).find(".question-arrow").addClass('active');
        $(this).find(".questions__item-info").stop().css('opacity', '0').animate({
            opacity: 1 
        }, 200);    
    } else {
        $(this).find(".questions__item-info").addClass('closed');
        $(this).find(".question-arrow").removeClass('active');
    }
});