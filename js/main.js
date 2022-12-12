//animation icon toggler of navbar
$(`.toglers`).click(function () {
    $(`.toglers`).toggleClass(`active`);
});

/*swiper*/
var swiper = new Swiper(".aboutSwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplayTimeout: 7000,
    autoplay: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    }
});
var swiper = new Swiper(".headerSwiper", {
    // loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    autoplayTimeout: 7000,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return '0' + number;
        }
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
    }
});
var swiper = new Swiper(".SwiperH", {
    slidesPerView: 2,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    }
});
/* counter button */
// ------------ increase products -----------
$(".plus").click(function () {
    $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
});

$(".minus").click(function () {

    child = $(this).parent().children(".qt");

    if (parseInt(child.html()) > 1) {
        child.html(parseInt(child.html()) - 1);
    }

});
/**wow  animate*/
new WOW().init();
