/* keeps button selection highlighted on click */
$('button').on('click', function() {
    $('button').removeClass('active');
    $(this).addClass('active');
})