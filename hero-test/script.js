$(function () {
  $('.bg').css('background-image', "url('../hero_img_01.jpg' )");
  $('.openBtn').on('click', function () {
    $('.popup-overlay, .popup-content').addClass('active');
  });

  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked
  $('.closeBtn, .popup-overlay').on('click', function () {
    $('.popup-overlay, .popup-content').removeClass('active');
  });

  $('.closeBtn').click(function (e) {
    let video = $('.popup-content').children('iframe').attr('src');
    $('.popup-content').children('iframe').attr('src', '');
    $('.popup-content').children('iframe').attr('src', video);
  });
});
