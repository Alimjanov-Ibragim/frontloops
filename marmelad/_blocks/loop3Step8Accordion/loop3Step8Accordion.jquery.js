var Atitle = $('.loop3Step8Accordion__title');
var Abody = $('.loop3Step8Accordion__body');

$('.loop3Step8Accordion__title').on('click', function () {
    var body = $(this).closest('.loop3Step8Accordion__item').find('.accordion__body');

    if ($(this).closest('.loop3Step8Accordion__item').hasClass('isOpened')) {
      $(this).closest('.loop3Step8Accordion__item').removeClass('isOpened');
      body.stop().slideUp();
    } else {
      $('.loop3Step8Accordion__item.isOpened .accordion__body').slideUp();
      $('.loop3Step8Accordion__item.isOpened').removeClass('isOpened');
      $(this).closest('.loop3Step8Accordion__item').addClass('isOpened');
      body.stop().slideDown();
    }
});