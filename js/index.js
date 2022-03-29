// бургер

document.querySelector(".open-burger-btn").addEventListener("click", function() {
    document.querySelector(".top-nav").classList.add("active");
})
document.querySelector(".close-burger-btn").addEventListener("click", function() {
    document.querySelector(".top-nav").classList.remove("active");
})

//hero swiper

const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    loop: true,
    effect: 'fade',

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    }
});

//кастомный скроллбвр

new SimpleBar(document.querySelector(".dropdown-scroll-1"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown-scroll-2"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown-scroll-3"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown-scroll-4"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown-scroll-5"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
});

//планый скролл по сайту

const $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    return false;
});

//выпадающеи хедер-бот пункты

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".dropdown-list__btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".dropdown-list__content");

            document.querySelectorAll(".dropdown-list__btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active--btn");
                }
            });

            document.querySelectorAll(".dropdown-list__content").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("active-list--item");
                }
            })
            dropdown.classList.toggle("active-list--item");
            btn.classList.toggle("active--btn")
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".bot-nav__list")) {
            document.querySelectorAll(".dropdown-list__content").forEach(el => {
                el.classList.remove("active-list--item");
            })
            document.querySelectorAll(".dropdown-list__btn").forEach(el => {
                el.classList.remove("active--btn");
            });
        }
    })
})

// стрелка на хэдер бот
document.addEventListener("DomContentLoaded", function() {
    document.querySelectorAll(".dropdown-list__btn").forEach
})

//header form search

document.querySelector(".form-content__open").addEventListener("click", function() {
    document.querySelector(".form-content__open").classList.add("active");
    document.querySelector(".form-top").classList.add("form-top__active");
    document.querySelector(".header-logo").classList.add("header-logo__none");
    document.querySelector(".open-burger-btn").classList.add("open-burger-btn--none");
    //document.querySelector(".form-top__close").classList.add("form-top__close--block");
    this.classList.add("active");
});

// gallery select

const element = document.querySelector('.gallery-form__list');
const choices = new Choices(element, {
    searchEnabled: false
});


document.addEventListener("click", function(e) {
    let target = e.target;
    let form = document.querySelector(".form-top");
    if (!target.closest(".form-content")) {
        form.classList.remove("form-top__active");
        form.querySelector(".form-top__input").value = "";
        document.querySelector(".form-content__open").classList.remove("active")
    }
    if (target.closest(".form-top__close")) {
        form.classList.remove("form-top__active");
        form.querySelector(".form-top__input").value = "";
        document.querySelector(".form-content__open").classList.remove("active");
        document.querySelector(".header-logo").classList.remove("header-logo__none");
        document.querySelector(".open-burger-btn").classList.remove("open-burger-btn--none");
    }
});

//возвращается логотип по клику на экран
document.addEventListener("click", function(e) {
    let target = e.target;
    let logo = document.querySelector(".header-logo");
    if (!target.closest(".header-form-content")) {
        logo.classList.remove("header-logo__none");
        document.querySelector(".form-content__open").classList.remove("active")
    }
})

//возвращается кнопка бургера по клику на экран
document.addEventListener("click", function(e) {
    let target = e.target;
    let burgerBtn = document.querySelector(".open-burger-btn");
    if (!target.closest(".header-form-content")) {
        burgerBtn.classList.remove("open-burger-btn--none");
        document.querySelector(".form-content__open").classList.remove("active")
    }
})


let gallerySlider = new Swiper(".slides-container", {
    slidesPerView: 1,
    grid: {
        rows: 1,
        fill: "row"
    },
    spaceBetween: 20,
    pagination: {
        el: ".gallery-section .gallery-pagination",
        type: "fraction"
    },
    navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev"
    },

    breakpoints: {
        441: {
            slidesPerView: 2,
            grid: {
                rows: 2
            },
            spaceBetween: 30
        },

        1200: {
            slidesPerView: 3,
            grid: {
                rows: 2
            },
            spaceBetween: 50
        }
    },

    a11y: false,
    keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

    // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми 
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: 'slide-visible',

    on: {
        init: function() {
            this.slides.forEach(slide => {
                if (!slide.classList.contains('slide-visible')) {
                    slide.tabIndex = '-1';
                } else {
                    slide.tabIndex = '';
                }
            });
        },
        slideChange: function() {
            this.slides.forEach(slide => {
                if (!slide.classList.contains('slide-visible')) {
                    slide.tabIndex = '-1';
                } else {
                    slide.tabIndex = '';
                }
            });
        }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
});


//catalog tabs
document.addEventListener("DOMContentLoaded", function() {
    function tabsActive(tabPath, tabTarget) {
        document.querySelectorAll(tabPath).forEach(item => {
            item.addEventListener("click", function(e) {
                let path = e.currentTarget.dataset.path;
                document.querySelectorAll(tabTarget).forEach(el => {
                    el.classList.remove("visible");
                });
                document.querySelectorAll(tabPath).forEach(el => {
                    el.classList.remove("visible");
                });
                document.querySelector(`[data-target="${path}"]`).classList.add("visible");

                this.classList.add("visible");
            })
        });
    };
    tabsActive(".title-row__btn", ".catalog-main");
    tabsActive(".catalog-accordion__btn-tabs", ".catalog-content__left");
});

// accordion catalog

$(function() {
    $(".accordion-plug").accordion();
});

$(".accordion-plug").accordion({
    heightStyle: "content",
});

const heightStylePlug = $(".accordion-plug").accordion("option", "heightStyle");

$(".accordion-plug").accordion({
    heightStyle: "content",
    refresh: true,
    collapsible: true,
    animate: 400,
    //active: 0,
});

$(function() {
    $("#accordion").accordion();
});

$("#accordion").accordion({
    heightStyle: "content",
});

const heightStyle = $("#accordion").accordion("option", "heightStyle");

$("#accordion").accordion({
    heightStyle: "content",
    refresh: true,
    collapsible: true,
    animate: 400,
    //active: 0,
});

/*
//events
const eventsSwiper = new Swiper(".events-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    grid: {
        rows: 1,
    },
    pagination: {
        el: ".events-swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    navigation: {
        nextEl: ".events-next",
        prevEl: ".events-prev"
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            grid: {
                rows: 1,
            },
            spaceBetween: 0,
        },

        450: {
            slidesPerView: 2,
            grid: {
                rows: 1,
            },
            spaceBetween: 34,
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: {
                rows: 1,
            },
            spaceBetween: 34,
        },

        769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
                rows: 1,
            },
            spaceBetween: 27,
        },

        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
                rows: 1
            },
            spaceBetween: 27,
        },

        1900: {
            spaceBetween: 50,
        }
    },

    a11y: {
        prevSlideMessage: 'Предыдущий',
        nextSlideMessage: 'Следующий',
    }
*/
// on: {
//   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
//   beforeResize: function () {
//     this.slides.forEach((el) => {
//       el.style.marginTop = "";
//     });
//   }
// }


(() => {
    const MOBILE_WIDTH = 580;
    const DESKTOP_WIDTH = 961;
    const btn = document.querySelector(".js-show");

    const sliderMobileParams = {
        paginationClassName: "events-pagination",
        cardsContainerName: "js-slider",
        cardsWrapName: "js-slides-wrap",
        card: "slide",
        hiddenClass: "is-hidden"
    };

    function getWindowWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.body.clientWidth,
            document.documentElement.clientWidth
        );
    }

    function activateMobileSlider(params) {
        const pagination = document.createElement("div");
        pagination.classList.add(params.paginationClassName);
        params.cardsContainer.append(pagination);

        params.cardsContainer.classList.add("swiper-container");
        params.cardsWrap.classList.add("swiper-wrapper");

        params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: `.${params.cardsContainerName} .${params.paginationClassName}`
            },

            on: {
                beforeInit() {
                    document.querySelectorAll(`.${params.card}`).forEach((el) => {
                        el.classList.add("swiper-slide");
                    });
                },

                beforeDestroy() {
                    this.slides.forEach((el) => {
                        el.classList.remove("swiper-slide");
                        el.removeAttribute("role");
                        el.removeAttribute("aria-label");
                    });

                    this.pagination.el.remove();
                }
            }
        });
    }

    function destroyMobileSlider(params) {
        params.cardsSlider.destroy();
        params.cardsContainer.classList.remove("swiper-container");
        params.cardsWrap.classList.remove("swiper-wrapper");
        params.cardsWrap.removeAttribute("aria-live");
        params.cardsWrap.removeAttribute("id");
    }

    function setHiddenCards(params, windowWidth) {
        const cards = document.querySelectorAll(`.${params.card}`);
        let quantity = cards.length;

        if (windowWidth > MOBILE_WIDTH && windowWidth < DESKTOP_WIDTH) {
            quantity = 2;
        }

        if (windowWidth >= DESKTOP_WIDTH) {
            quantity = 3;
        }

        cards.forEach((card, i) => {
            card.classList.remove(params.hiddenClass);
            if (i >= quantity) {
                card.classList.add(params.hiddenClass);
            }
        });
    }

    function showCards(e) {
        const cards = document.querySelectorAll(`.${sliderMobileParams.card}`);

        e.target.style = "display: none";

        cards.forEach((card) => {
            card.classList.remove(sliderMobileParams.hiddenClass);
        });
    }

    function checkWindowWidthMobile(params) {
        const currentWidth = getWindowWidth();
        btn.style = "";
        params.cardsContainer = document.querySelector(
            `.${params.cardsContainerName}`
        );
        params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

        if (
            currentWidth <= MOBILE_WIDTH &&
            (!params.cardsSlider || params.cardsSlider.destroyed)
        ) {
            activateMobileSlider(params);
        } else if (currentWidth > MOBILE_WIDTH && params.cardsSlider) {
            destroyMobileSlider(params);
        }

        setHiddenCards(params, currentWidth);
    }

    checkWindowWidthMobile(sliderMobileParams);
    btn.addEventListener("click", showCards);

    window.addEventListener("resize", function() {
        checkWindowWidthMobile(sliderMobileParams);
    });
})();




//projects

const projectsSwiper = new Swiper(".projects-swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    grid: {
        rows: 1,
    },
    spaceBetween: 50,
    navigation: {
        nextEl: ".projects-next",
        prevEl: ".projects-prev"
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 34,
        },
        // 577: {
        //   slidesPerView: 2,
        //   grid: {
        //     rows: 1,
        //   },
        //   spaceBetween: 10,
        //  },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },
        1201: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },
    }
});

//projects-tooltips

tippy('#projects-tooltip1', {
    content: 'Пример современных тенденций - современная методология разработки',
    maxWidth: 264,
    theme: 'lilac',
    //hideOnClick: false,
    //trigger: 'click',
});

tippy('#projects-tooltip2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    maxWidth: 264,
    theme: 'lilac',
});


tippy('#projects-tooltip3', {
    content: 'В стремлении повысить качество',
    maxWidth: 264,
    theme: 'lilac',
});


//contacts
//contacts map

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.758463, 37.601079],
        zoom: 13,
        controls: ['geolocationControl', 'zoomControl']
    }, {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "200px", right: "20px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "120px", right: "20px" }

    });
    myMap.behaviors.disable('scrollZoom'),
        myPlacemark = new ymaps.Placemark(myMap.getCenter([55.75846806898367, 37.60108849999989]), {
            balloonContentHeader: "Шоурум №4",
            balloonContentBody: "Леонтьевский переулок, дом 5, строение 1"
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/contacts/icon-map.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [0, 0],
        })
    myMap.geoObjects.add(myPlacemark);
}

//contacts validate

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

const contactsFormValidation = new JustValidate('#form-contacts');

contactsFormValidation
    .addField('#form-contacts__name', [{
            rule: 'minLength',
            value: 2,
            errorMessage: 'Имя слишком короткое',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Имя слишком длинное',
        },
        {
            rule: 'required',
            errorMessage: 'Обязательно для заполнения!'
        },
    ])
    .addField('#form-contacts__tel', [{
            rule: 'required',
            errorMessage: 'Обязательно для заполнения!',
        },
        {
            rule: "function",
            validator: function(name, value) {
                const phone = selector.inputmask.unmaskedvalue();
                return phone.length === 10
            },
            errorMessage: 'Недопустимый формат',
        }
    ]);