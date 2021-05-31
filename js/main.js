let searchClose = true

$('.clients__search-btn').bind('click', function() {

    if (searchClose == true) {
        $(this).parents('.short-search').find('.search__field').fadeIn(500)

        $(".short-search").animate({
            width: 177
        }, 500);

        searchClose = false
    } else if (searchClose == false) {
        $(this).parents('.short-search').find('.search__field').fadeOut(500)

        $(".short-search").animate({
            width: 16
        }, 500);

        searchClose = true
    }


})

$('.radio-block input[type="radio"]').bind('change', function() {
    if ($(this).prop('checked') && !$(this).parents('.radio-block').find('.radio-block__hidden').hasClass('open-all')) {
        $(this).parents('.card').find('.radio-block__hidden').slideUp(250)
        $(this).parents('.radio-block').find('.radio-block__hidden').slideDown(250)
    } else if (!$(this).prop('checked')) {
        $(this).parents('.radio-block').find('.radio-block__hidden').slideDown(250)
    }
})


$('#next1').bind('click', function() {
    $('.quiz__card_1').fadeOut(1)
    $('.quiz__card_2').fadeIn(500)
    $('#step1').addClass('closed')
    $('#step2').addClass('active')
})

$('#next2').bind('click', function() {
    $('.quiz__card_2').fadeOut(1)
    $('.quiz__card_3').fadeIn(500)
    $('#step2').addClass('closed')
    $('#step3').addClass('active')
})

$('#prev2').bind('click', function() {
    $('.quiz__card_2').fadeOut(1)
    $('.quiz__card_1').fadeIn(500)
    $('#step2').removeClass('active')
    $('#step1').removeClass('closed')
    $('#step1').addClass('active')  
})


$('#next3').bind('click', function() {
    $('.quiz__card_3').fadeOut(1)
    $('.quiz__card_4').fadeIn(500)
    $('#step3').addClass('closed')
    $('#step4').addClass('active')
})

$('#prev3').bind('click', function() {
    $('.quiz__card_3').fadeOut(1)
    $('.quiz__card_2').fadeIn(500)
    $('#step3').removeClass('active')
    $('#step2').removeClass('closed')
    $('#step2').addClass('active')  
})

$('#next4').bind('click', function() {
    $('.quiz__card_4').fadeOut(1)
    $('.quiz__card_5').fadeIn(500)
    $('#step4').addClass('closed')
    $('#step5').addClass('active')
})

$('#prev4').bind('click', function() {
    $('.quiz__card_4').fadeOut(1)
    $('.quiz__card_3').fadeIn(500)
    $('#step4').removeClass('active')
    $('#step3').removeClass('closed')
    $('#step3').addClass('active')  
})


$('#next5').bind('click', function() {
    $('.quiz__card_5').fadeOut(1)
    $('.quiz__card_6').fadeIn(500)
    $('#step5').addClass('closed')
    $('#step6').addClass('active')
})

$('#prev5').bind('click', function() {
    $('.quiz__card_5').fadeOut(1)
    $('.quiz__card_4').fadeIn(500)
    $('#step5').removeClass('active')
    $('#step4').removeClass('closed')
    $('#step4').addClass('active')  
})



$('#next6').bind('click', function() {
    $('.quiz__card').fadeOut(1)
    $('#step6').addClass('closed')
})

$('#prev6').bind('click', function() {
    $('.quiz__card_6').fadeOut(1)
    $('.quiz__card_5').fadeIn(500)
    $('#step6').removeClass('active')
    $('#step5').removeClass('closed')
    $('#step5').addClass('active')  
})


$('#change1').bind('click', function() {
    $(this).parents('.card').fadeOut(1)
    $('.quiz__card_1').fadeIn(500)
    $('.quiz-steps__item').removeClass('closed')
    $('.quiz-steps__item').removeClass('active')
    $('#step1').addClass('active')
})

$('#change2').bind('click', function() {
    $(this).parents('.card').fadeOut(1)
    $('.quiz__card_2').fadeIn(500)
    $('.quiz-steps__item').removeClass('closed')
    $('.quiz-steps__item').removeClass('active')
    $('#step1').addClass('closed')
    $('#step2').addClass('active')
})


$('#change3').bind('click', function() {
    $(this).parents('.card').fadeOut(1)
    $('.quiz__card_3').fadeIn(500)
    $('.quiz-steps__item').removeClass('closed')
    $('.quiz-steps__item').removeClass('active')
    $('#step1').addClass('closed')
    $('#step2').addClass('closed')
    $('#step3').addClass('active')
})

$('#change4').bind('click', function() {
    $(this).parents('.card').fadeOut(1)
    $('.quiz__card_4').fadeIn(500)
    $('.quiz-steps__item').removeClass('closed')
    $('.quiz-steps__item').removeClass('active')
    $('#step1').addClass('closed')
    $('#step2').addClass('closed')
    $('#step3').addClass('closed')
    $('#step4').addClass('active')
})


$('#change5').bind('click', function() {
    $(this).parents('.card').fadeOut(1)
    $('.quiz__card_5').fadeIn(500)
    $('.quiz-steps__item').removeClass('closed')
    $('.quiz-steps__item').removeClass('active')
    $('#step1').addClass('closed')
    $('#step2').addClass('closed')
    $('#step3').addClass('closed')
    $('#step4').addClass('closed')
    $('#step5').addClass('active')
})