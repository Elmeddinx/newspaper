var searchBtn = document.getElementById("search-btn");
var searchBar = document.getElementById("search-bar");
searchBtn.addEventListener("click", (event) => {
    searchBar.classList.toggle("active");
    event.stopPropagation();
});
document.addEventListener("click", (event) => {
    if (!searchBar.contains(event.target) && !searchBtn.contains(event.target)) {
        searchBar.classList.remove("active");
    }
});

// Bu hissə əlavə ediləcək
document.addEventListener('DOMContentLoaded', function () {
    const menuList = document.getElementById('menu-list');
    const moreMenu = document.getElementById('more-menu');
    const dropdownMenu = document.getElementById('dropdown-menu');

    function getMaxVisibleItems() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 992) {
            return null;
        } else if (screenWidth >= 992 && screenWidth < 1100) {
            return 6;
        } else if (screenWidth >= 1100 && screenWidth < 1250) {
            return 8;
        } else {
            return 9;
        }
    }

    function adjustMenu() {
        const maxVisibleItems = getMaxVisibleItems();

        if (maxVisibleItems === null) {
            dropdownMenu.innerHTML = '';
            moreMenu.classList.add('d-none');
            Array.from(menuList.children).forEach(item => (item.style.display = 'inline-block'));
            return;
        }

        dropdownMenu.innerHTML = '';
        moreMenu.classList.add('d-none');

        const menuItems = Array.from(menuList.children);

        menuItems.forEach(item => (item.style.display = 'inline-block'));

        for (let i = maxVisibleItems; i < menuItems.length; i++) {
            dropdownMenu.appendChild(menuItems[i].cloneNode(true));
            menuItems[i].style.display = 'none';
            moreMenu.classList.remove('d-none');
        }
    }
    adjustMenu();
    window.addEventListener('resize', adjustMenu);
});

// Bu hissə əlavə ediləcək








if (document.body.id === "home") {
    var swiper = new Swiper(".big-post-swiper", {
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
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
    var swiper = new Swiper(".section-4-swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
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
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
    var swiper = new Swiper(".section-5-swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
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
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
    var swiper = new Swiper(".section-6-swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
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
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        },
    });
    var swiper = new Swiper(".section-7-swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
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
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
    var player = videojs('my-video');
} else if (document.body.id === "single-article") {
    var player = videojs('article-latest-video');
    var swiper = new Swiper(".similar-news-section-swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
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
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });
    var swiper = new Swiper(".news-img-swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
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
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });

}
flatpickr("#calendar", {
    dateFormat: "Y-m-d",
    inline: true,
    monthSelectorType: "static",
    locale: {
        firstDayOfWeek: 1,
        weekdays: {
            shorthand: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
            longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }
    }
});
var changeFont = document.getElementById("change-font");
var changeFontCard = document.getElementById("change-font-card");
const fontSizeSlider = document.getElementById("fontSizeSlider");
const sliderOutput = document.getElementById("sliderOutput");
const changeText = document.querySelectorAll("article p");

if (changeFont) {
    changeFont.addEventListener("click", (e) => {
        changeFontCard.classList.toggle("active");
    })

    document.addEventListener("click", (event) => {
        if (!changeFontCard.contains(event.target) && !changeFont.contains(event.target)) {
            changeFontCard.classList.remove("active");
        }
    });
    const fontSizes = {
        50: "10.5px",
        75: "15.75px",
        100: "21px",
        125: "26.25px",
        150: "31.5px"
    };

    fontSizeSlider.addEventListener("input", function () {
        const value = fontSizeSlider.value;
        sliderOutput.textContent = value + "%";
        changeText.forEach(p => {
            p.style.fontSize = fontSizes[value]
        });

        const sliderWidth = fontSizeSlider.offsetWidth;
        const max = fontSizeSlider.max;
        const min = fontSizeSlider.min;
        const percent = (value - min) / (max - min);
        const offset = percent * sliderWidth;
        const sliderRect = fontSizeSlider.getBoundingClientRect();
        const thumbPosition = (value / (150 - 40)) * sliderRect.width;

        sliderOutput.style.left = `${thumbPosition}px`;
    });

}
