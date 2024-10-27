var swiper = new Swiper(".big-post-swiper", {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
});
var swiper = new Swiper(".section-3-swiper", {
    slidesPerView: 2,
    spaceBetween: 36,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 15,
        },
        360: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        },
        420: {
            slidesPerView: 1.8,
            spaceBetween: 20,
        },
        520: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
    },
});
var player = videojs('my-video');

flatpickr("#calendar", {
    dateFormat: "Y-m-d",
    inline: true,  // Takvimi gömülü olarak gösterir
    monthSelectorType: "static",  // Görseldeki gibi sabit ay seçim çubuğu sağlar
    locale: {
        firstDayOfWeek: 1,  // Pazartesi başlangıç
        weekdays: {
            shorthand: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }
    }
});