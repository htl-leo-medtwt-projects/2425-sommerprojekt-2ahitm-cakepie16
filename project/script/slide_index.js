var splide_boxen = new Splide('.splide.boxen', {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  pagination: false,
  autoplay: true,
  interval: 4000,
  breakpoints: {
    1024: {
      perPage: 2,
    },
    640: {
      perPage: 1,
    },
  }
});
splide_boxen.mount();

  var splide_header = new Splide('.bildheader-slider',{
    type: 'fade',
    autoplay: true,
    interval: 4000,
    pauseOnHover: false,
    arrows: false,
    pagination: false,
  })
  splide_header.mount();
