
// Swiper
var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        520: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        950: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
    },
});



