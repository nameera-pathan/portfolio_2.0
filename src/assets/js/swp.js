// const sketchCarousel = new Swiper(".sketch-carousel", {
//     // slidesPerView: "auto",
//     slidesPerView: 3,
//     spaceBetween: 100,

//     loop: true,

//     speed: 2500,

//     autoplay: {
//         delay: 0,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//     },

//     allowTouchMove: true,
//     freeMode: false,
//     // loopAdditionalSlides: 100,
// });

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