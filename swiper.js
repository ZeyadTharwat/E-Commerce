
    var mySwiper = new Swiper('.s1', {
        scrollbar: {
            draggable: true,
        },
        slidesPerView: 2,
        spaceBetween: 70,
        slidesPerGroup: 2,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },


        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 2,

            },
            992: {
                slidesPerView: 4,
                spaceBetween: 8,
                slidesPerGroup: 4,

            }
        }
    });

    var swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

