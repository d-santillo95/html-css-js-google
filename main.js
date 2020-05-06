$(document).click(function(e) {
    if (!$(e.target).hasClass('nthm')) {
        $('.container-dropdown-menu').removeClass('active-menu');
    }
})

$('.dropdown').click(function(){
    $('.container-dropdown-menu').toggleClass('active-menu');
})
