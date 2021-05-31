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

$('input[type="radio"]').bind('change', function() {
    if ($(this).prop('checked')) {
        $('.radio-block__hidden').removeClass('active')
        $(this).parents('.radio-block').find('.radio-block__hidden').addClass('active')
    } else if (!$(this).prop('checked')) {
        $(this).parents('.radio-block').find('.radio-block__hidden').removeClass('active')
    }
})


$('#next1').bind('click', function() {
    $('.quiz__card_1').hide()
    $('.quiz__card_2').show()
    $('#step1').addClass('closed')
    $('#step2').addClass('active')
})

$('#next2').bind('click', function() {
    $('.quiz__card_2').hide()
    $('.quiz__card_3').show()
    $('#step2').addClass('closed')
    $('#step3').addClass('active')
})

$('#prev2').bind('click', function() {
    $('.quiz__card_2').hide()
    $('.quiz__card_1').show()
    $('#step2').removeClass('active')
    $('#step1').removeClass('closed')
    $('#step1').addClass('active')  
})


$('#next3').bind('click', function() {
    $('.quiz__card_3').hide()
    $('.quiz__card_4').show()
    $('#step3').addClass('closed')
    $('#step4').addClass('active')
})

$('#prev3').bind('click', function() {
    $('.quiz__card_3').hide()
    $('.quiz__card_2').show()
    $('#step3').removeClass('active')
    $('#step2').removeClass('closed')
    $('#step2').addClass('active')  
})

$('#next4').bind('click', function() {
    $('.quiz__card_4').hide()
    $('.quiz__card_5').show()
    $('#step4').addClass('closed')
    $('#step5').addClass('active')
})

$('#prev4').bind('click', function() {
    $('.quiz__card_4').hide()
    $('.quiz__card_3').show()
    $('#step4').removeClass('active')
    $('#step3').removeClass('closed')
    $('#step3').addClass('active')  
})


$('#next5').bind('click', function() {
    $('.quiz__card_5').hide()
    $('.quiz__card_6').show()
    $('#step5').addClass('closed')
    $('#step6').addClass('active')
})

$('#prev5').bind('click', function() {
    $('.quiz__card_5').hide()
    $('.quiz__card_4').show()
    $('#step5').removeClass('active')
    $('#step4').removeClass('closed')
    $('#step4').addClass('active')  
})



$('#next6').bind('click', function() {
    $('.quiz__card').hide()
    $('#step6').addClass('closed')
})

$('#prev6').bind('click', function() {
    $('.quiz__card_6').hide()
    $('.quiz__card_5').show()
    $('#step6').removeClass('active')
    $('#step5').removeClass('closed')
    $('#step5').addClass('active')  
})
