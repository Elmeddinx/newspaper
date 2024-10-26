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