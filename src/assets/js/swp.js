const sketchCarousel = new Swiper(".sketch-carousel", {
    slidesPerView: "auto",
    centeredSlides: true,
    centeredSlidesBounds: false,

    spaceBetween: 30,
    loop: true,

    speed: 2500,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
    },

    grabCursor: true,
});