const sketchCarousel = new Swiper(".sketch-carousel", {
    slidesPerView: "auto",
    spaceBetween: 100,

    loop: true,

    speed: 2500,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    allowTouchMove: true,
    freeMode: false,
    // loopAdditionalSlides: 12,
});