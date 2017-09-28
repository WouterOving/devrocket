$(document).ready(function () {
    var hoverTimeout;
    $('svg').hover(function () {
        clearTimeout(hoverTimeout);
        $('.path_rocket').addClass('hoveredRocket');
        $('.path_fire').addClass('hoveredFire');
        console.log(hoverTimeout);
    }, function () {
        var self = $(this);
        hoverTimeout = setTimeout(function () {
            $('.path_rocket').removeClass('hoveredRocket');
            $('.path_fire').removeClass('hoveredFire');
        }, 1500);
    });

});
