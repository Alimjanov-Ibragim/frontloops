var Atitle = $('.loop3Step8Accordion__title');
var Abody = $('.loop3Step8Accordion__body');

Atitle.on('click', function(e){
    e.preventDefault();

    const index = $(this).index();

    Atitle
        .eq(index)
        .addClass('isOpened')
        .siblings().removeClass('isOpened');

    Abody
        .eq(index)
        .addClass('isOpened')
        .siblings().removeClass('isOpened');
});