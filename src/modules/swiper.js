import Swiper from 'swiper/bundle';

// init Swiper:
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1.25,
    spaceBetween: 10,
    freeMode: true,
    //updateOnWindowResize: false,

    // If we need pagination
    navigation: {
        nextEl: '.arrow_right',
        prevEl: '.arrow_left',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        540: {
            slidesPerGroup: 2,
            slidesPerView: 2,
            freeMode: false
        },
        992: {
            simulateTouch: false,
            slidesPerGroup: 2,
            slidesPerView: 2,
            freeMode: false,
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        ' of ' +
                        '<span class="' + totalClass + '"></span>';
                }
            }
        }
    }

})
