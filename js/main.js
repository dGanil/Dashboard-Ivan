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

function chek1() {
    if ($('#existingClient').prop('checked')) {
        if ($('.bootstrap-select .filter-option-inner-inner').text() == "Выберите клиента из спискаВыберите тип учетной записиВыберите приоритетChoose a priority") {
            yeah = 0
        } else {
            yeah = 1
        }
    } else if ($('#newClient').prop('checked')) {
        if (
            $('#nameClient').val() == "" ||
            $('#desc').val() == "" ||
            $('#birthday').val() == "" ||
            $("#pension").val() == "" ||
            $("#busyness").val() == "" ||
            $("#drawdowns").val() == "") {
            yeah = 0
        } else {
            yeah = 1
        }
    }
}



$('#next1').bind('click', function() {

    chek1()
    if (yeah == 1) {
        $('.quiz__card_1').fadeOut(1)
        $('.quiz__card_2').fadeIn(500)
        $('#step1').addClass('closed')
        $('#step2').addClass('active')
    } else if (yeah == 0) {

    }

})





$('#next2').bind('click', function() {


    if ($('#taxPortfolio').prop('checked') || $("#investHorizont").val() == "") {
        if ($("#typeProfile").val() == "") {

        } else {
            $('.quiz__card_2').fadeOut(1)
            $('.quiz__card_3').fadeIn(500)
            $('#step2').addClass('closed')
            $('#step3').addClass('active')
        }
    } else if ($('#cofalifiedPortfolio').prop('checked') || $("#investHorizont").val() == "") {
        $('.quiz__card_2').fadeOut(1)
        $('.quiz__card_3').fadeIn(500)
        $('#step2').addClass('closed')
        $('#step3').addClass('active')
    } else if (!$('#cofalifiedPortfolio').prop('checked') || $("#investHorizont").val() == "") {

    }


    // if ($("#investHorizont").val() == "") {

    // } else {
    //     $('.quiz__card_2').fadeOut(1)
    //     $('.quiz__card_3').fadeIn(500)
    //     $('#step2').addClass('closed')
    //     $('#step3').addClass('active')
    // }
})

$('#prev2').bind('click', function() {
    $('.quiz__card_2').fadeOut(1)
    $('.quiz__card_1').fadeIn(500)
    $('#step2').removeClass('active')
    $('#step1').removeClass('closed')
    $('#step1').addClass('active')


})


$('#next3').bind('click', function() {


    if ($('#startCapital').val() == "" ||
        $('#fullPortfolioCost').val == "" ||
        $('.risk__slider-field').val() == "" ||
        $('#clientPriority').val() == "" ||
        $('#clientVolatility').val() == "" ||
        $('input[name="focus-potfolio"]:checked').length == 0) {

    } else {
        $('.quiz__card_3').fadeOut(1)
        $('.quiz__card_4').fadeIn(500)
        $('#step3').addClass('closed')
        $('#step4').addClass('active')
    }
})

$('#prev3').bind('click', function() {
    $('.quiz__card_3').fadeOut(1)
    $('.quiz__card_2').fadeIn(500)
    $('#step3').removeClass('active')
    $('#step2').removeClass('closed')
    $('#step2').addClass('active')
})

$('#next4').bind('click', function() {
    if ($('input[name="types-assets"]:checked').length == 0 || $('input[name="etf"]:checked').length == 0) {

    } else {
        $('.quiz__card_4').fadeOut(1)
        $('.quiz__card_5').fadeIn(500)
        $('#step4').addClass('closed')
        $('#step5').addClass('active')
    }
})

$('#prev4').bind('click', function() {
    $('.quiz__card_4').fadeOut(1)
    $('.quiz__card_3').fadeIn(500)
    $('#step4').removeClass('active')
    $('#step3').removeClass('closed')
    $('#step3').addClass('active')
})


let clientSelect, clientName, descClient, birthday, pension,
    busyness, drawdowns, typeFond, typeInvest, timeInvest, riskCapital,
    riskFull, riskPercent, riskPriority, riskDrawdowns, riskFocus, classActives,
    removeActions, etf, strategy

let items = [],
    value, value2,
    removeSectors = []
let endWay = false

function calculte() {
    clientSelect = $('#clientSelect').val()
    clientName = $('#nameClient').val()
    descClient = $('#desc').val()
    birthday = $('#birthday').val()
    pension = $('#pension').val()
    busyness = $('#busyness').val()
    drawdowns = $('#drawdowns').val()
    timeInvest = $('#investHorizont').val()
    riskCapital = $("#startCapital").val()
    riskFull = $("#fullPortfolioCost").val()
    riskPercent = $(".risk__slider-field").val()
    riskPriority = $("#clientPriority").val()
    riskDrawdowns = $("#clientVolatility").val()
    riskFocus = $("input[name='focus-potfolio']:checked").val()
    removeActions = $('.selectize-input .item').text().replaceAll('×', ', ')
    etf = $("input[name='etf']:checked").val()
    strategy = $("input[name='invest-strategy']:checked").val()
    $('input[name="types-assets"]:checked').each(function(_, e) {
        if ($(this).val() == '') {

        } else {
            value = $(this).attr('value')
            items.push(value);
        }

    });


    $('input[name="sectors"]:checked').each(function() {
        value2 = $(this).attr('value')
        removeSectors.push(value2);

    });

    if ($("#existingClient").prop('checked')) {
        $('#infoName').text('')
        $('#infoName').text(clientSelect)
    } else if ($("#newClient").prop('checked')) {
        $('#infoName').text('')
        $('#infoName').text(clientName)
        $('#infoDesc').text('')
        $('#infoDesc').text(descClient)
        $('#infoBirthday').text('')
        $('#infoBirthday').text(birthday)
        $('#infoPension').text('')
        $('#infoPension').text(pension)
        $('#infoBusyness').text('')
        $('#infoBusyness').text(busyness)
        $('#infoDrawdowns').text('')
        $('#infoDrawdowns').text(drawdowns)
    }
    $('#infoTimeInvest').text('')
    $("#infoTimeInvest").text(timeInvest)
    $('#infoStartCapital').text('')
    $("#infoStartCapital").text(riskCapital)
    $('#infoFullCost').text('')
    $("#infoFullCost").text(riskFull)
    $('#infoRiskPercent').text('')
    $("#infoRiskPercent").text(riskPercent)
    $('#infoInvestPriority').text('')
    $("#infoInvestPriority").text(riskPriority)
    $('#infoDoDrawdowns').text('')
    $("#infoDoDrawdowns").text(riskDrawdowns)
    $('#infoFocus').text('')
    $("#infoFocus").text(riskFocus)
    $('#infoActives').text('')
    $('#infoActives').text(items.join(', '))
    $('#infoRemoveSectors').text('')
    $('#infoRemoveSectors').text(removeSectors.join(', '))
    $('#infoRemoveActions').text('')
    $('#infoRemoveActions').text(removeActions.replace(/,\s*$/, ''))
    $('#infoEtf').text('')
    $('#infoEtf').text(etf)
    $('#infoStrategy').text('')
    $('#infoStrategy').text(strategy)
}

$('#next5').bind('click', function() {
    $('.quiz__card_5').fadeOut(1)
    $('.quiz__card_6').fadeIn(500)
    $('#step5').addClass('closed')
    $('#step6').addClass('active')

    calculte();
    endWay = true
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
    calculte();
})

$('#prev6').bind('click', function() {
    $('.quiz__card_6').fadeOut(1)
    $('.quiz__card_5').fadeIn(500)
    $('#step6').removeClass('active')
    $('#step5').removeClass('closed')
    $('#step5').addClass('active')
})



let backForth

let counterNav, numberStep

$('#change1').bind('click', function() {
    $(this).parents('.card').fadeOut(1)
    $('.quiz__card_1').fadeIn(500)
    $('.quiz-steps__item').removeClass('closed')
    $('.quiz-steps__item').removeClass('active')
    $('#step1').addClass('active')
    counterNav = "step-change"
    numberStep = 1
})



$('#step6').bind('click', function() {
    if (endWay && counterNav == "step-change" && numberStep == 1) {
        chek1()
        if (yeah == 1) {
            $('.quiz__card').fadeOut(1)
            $('.quiz__card_6').fadeIn(500)
            $(this).addClass('go-last')
            calculte();
        } else {}

    } else if (endWay && counterNav == "step-change" && numberStep == 2) {
        if ($('#taxPortfolio').prop('checked') || $("#investHorizont").val() != "") {
            if ($("#typeProfile").val() == "") {

            } else {
                $('.quiz__card').fadeOut(1)
                $('.quiz__card_6').fadeIn(500)
                $(this).addClass('go-last')
                calculte();
            }
        } else if ($('#cofalifiedPortfolio').prop('checked') || $("#investHorizont").val() == "") {
            $('.quiz__card').fadeOut(1)
            $('.quiz__card_6').fadeIn(500)
            $(this).addClass('go-last')
            calculte();
        } else if (!$('#cofalifiedPortfolio').prop('checked') || $("#investHorizont").val() == "") {

        }

    }
})



$('#change2').bind('click', function() {
    $(this).parents('.card').fadeOut(1)
    $('.quiz__card_2').fadeIn(500)
    $('.quiz-steps__item').removeClass('closed')
    $('.quiz-steps__item').removeClass('active')
    $('#step1').addClass('closed')
    $('#step2').addClass('active')
    counterNav = "step-change"
    numberStep = 2
})


$('#change3').bind('click', function() {
    $(this).parents('.card').fadeOut(1)
    $('.quiz__card_3').fadeIn(500)
    $('.quiz-steps__item').removeClass('closed')
    $('.quiz-steps__item').removeClass('active')
    $('#step1').addClass('closed')
    $('#step2').addClass('closed')
    $('#step3').addClass('active')
    counterNav = "step-change"
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
    counterNav = "step-change"
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
    counterNav = "step-change"
})