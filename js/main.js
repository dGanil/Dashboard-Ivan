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
        if ($('#clientSelect').val() == "") {
            yeah = 0
            $('#clientSelect').siblings('button').addClass('req')
            setTimeout(function() {
                $('#clientSelect').siblings('button').removeClass('req')
            }, 2000);
        } else {
            yeah = 1
        }
    } else if ($('#newClient').prop('checked')) {
        if (
            $('#nameClient').val() == "") {
            yeah = 0
            $('#nameClient').addClass('req')
            setTimeout(function() {
                $('#nameClient').removeClass('req')
            }, 2000);
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

$('input[name="clientInfo"]').bind('change', function() {
    $('#next1').removeClass('active')
})



$('#clientSelect').bind('change', function() {
    $('#next1').addClass('active')
})

$('#nameClient').bind('input', function() {
    if (!$(this).val() == "") {
        $('#next1').addClass('active')
    } else {
        $('#next1').removeClass('active')
    }

})



$('#next2').bind('click', function() {

    if ($('#investHorizont').val() == "") {
        $('#investHorizont').addClass('req')
        setTimeout(function() {
            $('#investHorizont').removeClass('req')
        }, 2000);
        if ($('#taxPortfolio').prop('checked')) {
            if ($("#typeProfile").val() == "") {
                $('#typeProfile').siblings('button').addClass('req')
                setTimeout(function() {
                    $('#typeProfile').siblings('button').removeClass('req')
                }, 2000);
            }
        }
    } else {
        if ($('#taxPortfolio').prop('checked')) {
            if ($("#typeProfile").val() == "") {
                $('#typeProfile').siblings('button').addClass('req')
                setTimeout(function() {
                    $('#typeProfile').siblings('button').removeClass('req')
                }, 2000);
            } else {
                $('.quiz__card_2').fadeOut(1)
                $('.quiz__card_3').fadeIn(500)
                $('#step2').addClass('closed')
                $('#step3').addClass('active')
            }
        } else if ($('#cofalifiedPortfolio').prop('checked')) {
            $('.quiz__card_2').fadeOut(1)
            $('.quiz__card_3').fadeIn(500)
            $('#step2').addClass('closed')
            $('#step3').addClass('active')
        }
    }
})

// $('input[name="typePortfolio"]').bind('change', function() {
//     $('#next2').removeClass('active')
// })



$('#typeProfile').bind('change', function() {
    if (!$('#investHorizont').val() == "") {
        $('#next2').addClass('active')
    } else {
        $('#next2').removeClass('active')
    }
})

$('#investHorizont').bind('input', function() {
    if (!$(this).val() == "" && !$('#typeProfile').val() == "") {
        $('#next2').addClass('active')
    } else {
        $('#next2').removeClass('active')
    }

})


$('#prev2').bind('click', function() {
    $('.quiz__card_2').fadeOut(1)
    $('.quiz__card_1').fadeIn(500)
    $('#step2').removeClass('active')
    $('#step1').removeClass('closed')
    $('#step1').addClass('active')


})


$('#next3').bind('click', function() {


    if (!$('#startCapital').val() == "" &&
        !$('#fullPortfolioCost').val() == "" &&
        !$('.risk__slider-field').val() == "" &&
        !$('#clientPriority').val() == "" &&
        !$('#clientVolatility').val() == "") {
        $('.quiz__card_3').fadeOut(1)
        $('.quiz__card_4').fadeIn(500)
        $('#step3').addClass('closed')
        $('#step4').addClass('active')
    } else {
        if ($('#startCapital').val() == "") {
            $('#startCapital').addClass('req')
            setTimeout(function() {
                $('#startCapital').removeClass('req')
            }, 2000);
        }

        if ($('#fullPortfolioCost').val() == "") {
            $('#fullPortfolioCost').addClass('req')
            setTimeout(function() {
                $('#fullPortfolioCost').removeClass('req')
            }, 2000);
        }

        if ($('.risk__slider-field').val() == "") {
            $('.risk__slider-field').addClass('req')
            setTimeout(function() {
                $('.risk__slider-field').removeClass('req')
            }, 2000);
        }

        if ($('#clientPriority').val() == "") {
            $('#clientPriority').siblings('button').addClass('req')
            setTimeout(function() {
                $('#clientPriority').siblings('button').removeClass('req')
            }, 2000);
        }

        if ($('#clientVolatility').val() == "") {
            $('#clientVolatility').siblings('button').addClass('req')
            setTimeout(function() {
                $('#clientVolatility').siblings('button').removeClass('req')
            }, 2000);
        }

    }
})


let step3key1, step3key2, step3key3, step3key4, step3key5


function check3() {
    if (step3key1 == 1 &&
        step3key2 == 1 &&
        step3key3 == 1 &&
        step3key4 == 1 &&
        step3key5 == 1) {
        $('#next3').addClass('active')
    } else {
        $('#next3').removeClass('active')
    }
}


$('#startCapital').bind('input', function() {
    if (!$(this).val() == "") {
        step3key1 = 1
    } else {
        step3key1 = 0
    }

    check3();

})

$('#fullPortfolioCost').bind('input', function() {
    if (!$(this).val() == "") {
        step3key2 = 1
    } else {
        step3key2 = 0
    }

    check3();

})

$('.risk__slider-field').bind('input', function() {
    if (!$(this).val() == "") {
        step3key3 = 1
    } else {
        step3key3 = 0
    }

    check3();

})


$('#clientPriority').bind('change', function() {
    step3key4 = 1

    check3();
})

$('#clientVolatility').bind('change', function() {
    step3key5 = 1
    check3();
})

var tooltip = $('<div class="slider-tooltip" id="tooltip" />').css({
        position: 'absolute',
        top: -29,
        left: -6
    }).hide();

 $("#sliderRisk").each(function() {
        let $this = $(this);
        let min = parseInt($this.data('min'));
        let max = parseInt($this.data('max'));
        $(this).slider({
            animate: true,
            range: "min",
            value: 1,
            min: min,
            max: max,
            step: 1,
            slide: function(event, ui) {
                $(".risk__slider-field").val(ui.value + '%');
                tooltip.text(ui.value);
                if (ui.value >= 0) {
                    step3key3 = 1
                } else {
                    step3key3 = 0
                }
                check3();

            }
        });


        $(".risk__slider-field").keyup(function() {
            let sum = $(this).val();
            $("#sliderRisk").slider("value", sum);

        });

    }).find(".ui-slider-handle").append(tooltip).hover(function() {
        tooltip.show()
    }, function() {
        tooltip.hide()
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

$('input[name="types-assets"]').bind('change', function() {
    if ($('input[name="types-assets"]:checked').length > 0 && $('input[name="etf"]:checked').length > 0) {
        $('#next4').addClass('active')
    } else {
        $('#next4').removeClass('active')
    }
})


$('input[name="etf"]').bind('change', function() {
    if ($('input[name="types-assets"]:checked').length > 0 && $('input[name="etf"]:checked').length > 0) {
        $('#next4').addClass('active')
    } else {
        $('#next4').removeClass('active')
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



// $('#step6').bind('click', function() {
//     if (endWay && counterNav == "step-change" && numberStep == 1) {
//         chek1()
//         if (yeah == 1) {
//             $('.quiz__card').fadeOut(1)
//             $('.quiz__card_6').fadeIn(500)
//             $(this).addClass('go-last')
//             calculte();
//         } else {}

//     } else if (endWay && counterNav == "step-change" && numberStep == 2) {
//         if ($('#taxPortfolio').prop('checked') || $("#investHorizont").val() != "") {
//             if ($("#typeProfile").val() == "") {

//             } else {
//                 $('.quiz__card').fadeOut(1)
//                 $('.quiz__card_6').fadeIn(500)
//                 $(this).addClass('go-last')
//                 calculte();
//             }
//         } else if ($('#cofalifiedPortfolio').prop('checked') || $("#investHorizont").val() == "") {
//             $('.quiz__card').fadeOut(1)
//             $('.quiz__card_6').fadeIn(500)
//             $(this).addClass('go-last')
//             calculte();
//         } else if (!$('#cofalifiedPortfolio').prop('checked') || $("#investHorizont").val() == "") {

//         }

//     }
// })



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