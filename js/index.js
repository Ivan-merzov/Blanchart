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
document.addEventListener("DomContentLoaded", function () {
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

// gallery select

const element = document.querySelector('.gallery-form__list');
    const choices = new Choices(element, {
      searchEnabled: false
    });


//gallery swiper

const gallerySwiper = new Swiper(".gallery-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 50,
  pagination: {
    el: ".gallery-swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev"
  },

   breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0,
    },

     576: {
       slidesPerView: 2,
       slidesPerGroup: 2,
       grid: {
         rows: 2,
       },
       spaceBetween: 30,
     },

     700: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
     },

     1200: {
       slidesPerView: 2,
       slidesPerGroup: 2,
       grid: {
         rows: 2
       },
       spaceBetween: 34,
     },

     1500: {
       slidesPerView: 3,
       grid: {
         rows: 2
       },
       spaceBetween: 45,
     }
   },

   a11y: {
     prevSlideMessage: 'Предыдущий',
     nextSlideMessage: 'Следующий',
   }
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

$( function () {
  $( ".accordion-plug" ).accordion();
});

$( ".accordion-plug" ).accordion({
  heightStyle: "content",
});

const heightStylePlug = $( ".accordion-plug" ).accordion( "option", "heightStyle" );

$(".accordion-plug").accordion({
  heightStyle: "content",
  refresh: true,
  collapsible: true,
  animate: 400,
  //active: 0,
});

$( function() {
  $( "#accordion" ).accordion();
} );

$( "#accordion" ).accordion({
  heightStyle: "content",
});

const heightStyle = $( "#accordion" ).accordion( "option", "heightStyle" );

$("#accordion").accordion({
  heightStyle: "content",
  refresh: true,
  collapsible: true,
  animate: 400,
  //active: 0,
});


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

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

const eventsPrev = document.getElementById('eventsPrev')
const eventsNext = document.getElementById('eventsNext')

eventsPrev.addEventListener('click', () => {
  eventsSwiper.eventsPrev();
});
eventsNext.addEventListener('click', () => {
  eventsSwiper.eventsNext();
});

// public

const publicSwiper = new Swiper(".public-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
  },
  spaceBetween: 50,
  pagination: {
     el: ".public-pagination",
     type: "fraction",
     clickable: true,
  },
  navigation: {
    nextEl: ".public-next",
    prevEl: ".public-prev"
  },
  breakpoints: {
     320: {
       spaceBetween: 30,
       allowTouchMove: false,

     },
      321: {
      slidesPerView: 2,
      spaceBetween: 30,
      allowTouchMove: true,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1201: {
      slidesPerView: 3,
    },
  },
});

const publicPrev = document.getElementById('publicPrev')
const publicNext = document.getElementById('publicNext')

publicPrev.addEventListener('click', () => {
  publicSwiper.eventsPrev();
});
publicNext.addEventListener('click', () => {
  publicSwiper.eventsNext();
});

//public spoiler

  let titleBtn = document.querySelector(".form-categories__title");
  let checklist = document.querySelector(".form-categories__list");
  titleBtn.addEventListener("click", function() {
    checklist.classList.toggle("form-categories__list--active");
    document.querySelectorAll(".form-categories__label").forEach(el => {
       el.classList.toggle("active");
       let checkbox = el.querySelector(".form-categories__input");

       if (checkbox.checked) {
         el.classList.add("active");
       }
     })
  });

  document.querySelectorAll(".form-categories__label").forEach(el => {
    el.addEventListener("click", function() {
      let label = this;
      if (checklist.classList.contains(".form-categories__list--active")) {
        label.classList.remove("active");
      }
    });
  });



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
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.758463,37.601079],
        zoom: 13,
    });
    myMap.behaviors.disable('scrollZoom'),
    myPlacemark = new ymaps.Placemark(myMap.getCenter([55.75846806898367,37.60108849999989]), {
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
  .addField('#form-contacts__name', [
    {
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
  .addField('#form-contacts__tel', [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения!',
    },
    {
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Недопустимый формат',
    }
  ]);





