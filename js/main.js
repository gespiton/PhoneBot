$(function () {
  const width = $(document).width();
  const $carouselPanels = $('.carouselPanel');

  initNavBar();
  wireNavButtonsEvent();

  function initNavBar() {
    $carouselPanels.each((index, elem) => {
      $(elem).css({
        transform: `translateX(${index * width}px)`
      })
    });
  }

  function wireNavButtonsEvent() {
    const $navButtons = $('nav div.nav-wrapper button');
    // const $carouselWraper = $('carousel-wraper');
    // $navButtons.
    $navButtons.each((index, elem) => {
        $(elem).on('click', () => translateElem(index));
      }
    );
    function translateElem(index) {
      console.log(index);
      $carouselPanels.each((i, elem) => {
        $(elem).css({
          transform: `translateX(${(i - index) * width}px)`
        });
      });
    }
  }
})
;