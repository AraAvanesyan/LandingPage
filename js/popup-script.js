$(document).ready(function () {
// - close popup form
    $(".m-form-close").on('click', function () {
        $('.m-form-wrapper').fadeOut(500);
    });
// - show popup form
    $(".m-button-callback").on('click', function () {
        section = 'header nav .m-callback ';
        var action = $(section + '.m-button-callback').attr('data-action');
        $(".m-form-wrapper").fadeIn(500);
    });

});