var Atitle = $('.loop3Step8Accordion__title');
var Abody = $('.loop3Step8Accordion__body');

var i = 1;
Atitle.each(function(){
    $(this).attr('data-info', i);
    i++;
});

var i = 1;
Abody.each(function(){
    $(this).attr('data-info', i);
    i++;
});


$('.loop3Step8Accordion__titles').on('click', '.loop3Step8Accordion__title', function() {

    var bb = $(this).attr('data-info');
    console.log(bb)

    $(this).addClass('opened');
    $(this).parents().find('.loop3Step8Accordion__body[data-info=bb]').addClass('opened');

});