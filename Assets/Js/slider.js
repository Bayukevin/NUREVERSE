const swiper = new Swiper('.swiper', {
    slidesPerView: 5, 
    spaceBetween: 10, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, 
    breakpoints: {
        1024: {
            slidesPerView: 4, // 4 slides
        },
        768: {
            slidesPerView: 2, // 2 slides
        },
        0: {
            slidesPerView: 1, // 1 slide
        }
    }
});
