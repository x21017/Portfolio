$('#page-link a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href'); 
    var pos = $(elmHash).offset().top;  
    $('body,html').animate({scrollTop: pos}, 500); 
    return false;
});
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});