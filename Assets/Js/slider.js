const swiper = new Swiper('.swiper', {
    slidesPerView: 4, // Default: Show 4 slides at once
    spaceBetween: 10, // Space between slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, // Infinite loop
    breakpoints: {
        // Untuk ukuran layar lebih besar atau sama dengan 1024px (desktop)
        1024: {
            slidesPerView: 4, // 4 slides
        },
        // Untuk ukuran layar lebih besar atau sama dengan 768px (tablet)
        768: {
            slidesPerView: 2, // 2 slides
        },
        // Untuk ukuran layar lebih kecil dari 768px (mobile)
        0: {
            slidesPerView: 1, // 1 slide
        }
    }
});
