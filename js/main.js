$(function () {
  const $wrap = $('#content-wrap');
  $wrap.carousel({fullWidth: true});
  $wrap.height("100%");

  const width = $(document).width();
  const $blueToothPanel = $('div#blueToothPanel');
  const $motorControlPanel = $('div#motorControlPanel');

  $motorControlPanel.css({
    transform: `translateX(${width}px)`
  });
  // $('#carousel-wraper').css(
  //   {transform: `translateX(-100px)`},
  // );

  initNavButton();


  function initNavButton() {
    const $navButtons = $('nav div.nav-wrapper button');
    const $carouselWraper = $('carousel-wraper');
    // $navButtons.
    $navButtons.each((index, elem) => {
      $(elem).on('click', function (e) {
        $('#carousel-wrapper').css(
          {
            transform: `translateX(${-(index) * width}px)`
          }
        )
      });
    });
  }
});