// ---ヒーロースライダー----
class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }
  _initSwiper() {
    return new Swiper(this.el, {
      loop: true,
      effect: "fade",
      centeredSlides: true,
      slidesPerView: 1,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  start(options = {}) {
    Object.assign(
      {
        delay: 10000,
        disableOnInteraction: false,
      },
      options
    );
    this.swiper.params.autoplay = options;
    this.swiper.autoplay.start();
  }
}
