
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        mobileFirst: true,
        infinite: false,
        prevArrow: null

    });
    $(document).keypress(function(e) {
        if(e.which == 13) {
           toggleImageUrlSample();
        }
    });
});

function toggleImageUrlSample() {
    if ($("#sample-link-explained").is(':visible')) {
        $('#sample-link-explained').css('display', 'none');
        $('#sample-link').fadeIn('slow',function(){}).css('display','block');
    } else {
        $('#sample-link').css('display', 'none');
        $('#sample-link-explained').fadeIn('slow',function(){}).css('display','block');
    }
}