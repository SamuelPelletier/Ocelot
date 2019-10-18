$(document).ready(function () {
    $('.fa').on('click', function () {
        $('.chat').toggle()
    });

    function toggle() {
        if ($(this).hasClass('d-none')) {
            $(this).removeClass('d-none');
        } else {
            $(this).addClass('d-none');
        }
    }
});