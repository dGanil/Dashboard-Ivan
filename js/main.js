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