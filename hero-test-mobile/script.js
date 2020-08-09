$(function () {
  $('.openBtn').on('tap', function () {
    $('.popup-overlay, .popup-content').addClass('active');
  });

  $('.closeBtn, .popup-overlay').on('tap', function () {
    $('.popup-overlay, .popup-content').removeClass('active');
  });

  $('.closeBtn').tap(function (e) {
    let video = $('.popup-content').children('iframe').attr('src');
    $('.popup-content').children('iframe').attr('src', '');
    $('.popup-content').children('iframe').attr('src', video);
  });
});
