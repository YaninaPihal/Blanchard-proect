
let swiper = new Swiper('.header__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  slideClass: 'header__swiper-slide',
  wrapperClass: 'header__swiper-wrapper',
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
});

/*выподающее меню*/
const menuBtns = document.querySelectorAll('.menu__btn');
const drops = document.querySelectorAll('.dropdown');

menuBtns.forEach(el => {
  el.addEventListener('click', (e) => {
    let currentBtn = e.currentTarget;
    let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

    menuBtns.forEach(el => {
      if (el !== currentBtn) {
        el.classList.remove('menu__btn--active');
      }
    });

    drops.forEach(el => {
      if (el !== drop) {
        el.classList.remove('dropdown--active');
      }
    });

    drop.classList.toggle('dropdown--active');
    currentBtn.classList.toggle('menu__btn--active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.menu')) {
    menuBtns.forEach(el => {
      el.classList.remove('menu__btn--active');
    });

    drops.forEach(el => {
      el.classList.remove('dropdown--active');
    });
  }
});


/*селект*/
const defaultSelect = () => {
  const element = document.querySelector('.default');
  const choices = new Choices(element, {
    searchEnabled: false,

  });

  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
};

defaultSelect();

/*swiper gallery*/
let gallerySlider = new Swiper(".swiper-right--content", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".swiper-pagination--right",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1205: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

});

//tab language
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.btn__catalog').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function (e) {
        e.classList.remove('tab-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
      });
    });

    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.btn__catalog').forEach(function (e) {
        e.classList.remove('catalog__btn--default')
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('catalog__btn--default');
      });
    });

  });
})

//tab painter
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion__btn').forEach(function (e) {
    e.addEventListener('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.painter-content').forEach(function (e) {
        e.classList.remove('painter-content--active')
        document.querySelector(`[data-target='${tab}']`).classList.add('painter-content--active');
      });
    });

    e.addEventListener('click', function (e) {
      const tabDefault = e.currentTarget.dataset.default;
      document.querySelectorAll('.accordion__btn').forEach(function (e) {
        e.classList.remove('accordion__btn--default')
        document.querySelector(`[data-path='${tabDefault}']`).classList.add('accordion__btn--default');
      });
    });

  });
})

//events button
let fourthSectionButton = document.querySelector('.events-button__block')
let fourthSectionBlockSecond = document.querySelector('.events__block-bottom')
fourthSectionButton.addEventListener('click', function () {
  fourthSectionButton.classList.add('active-button')
  fourthSectionBlockSecond.classList.add('active-block')
})



//publication__swiper
const sliderPublication = document.querySelector('.publication__swiper')
let swiperPublication = new Swiper(sliderPublication, {
  slidesPerView: 3,
  spaceBetween: 50,
  slideClass: 'project__swiper-slide',
  wrapperClass: 'publication__swiper-wrapper',
  slidesPerGroup: 2,
  loop: false,
  pagination: {
    el: ".project-pagination--right",
    type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".project-btn--next",
    prevEl: ".project-btn--prev"
  },
  breakpoints: {
    1490: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50
    }
  },

});


//partners__swiper
let mySwiper = new Swiper('.swiper-partners', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  loop: false,
  slideClass: 'partners__slide',
  wrapperClass: 'partners__swiper-wrapper',
  navigation: {
    nextEl: '.partners-btn--next',
    prevEl: '.partners-btn--prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 2
      },
      spaceBetween: 10
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },
});


//tell-mask
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);


//map
function init() {
  let myMap = new ymaps.Map("map", {
    center: [55.76037379240635, 37.6185881745531],
    zoom: 14
  });
  let myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/subtract.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });
  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
 myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
 myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
 myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
 myMap.controls.remove('rulerControl'); // удаляем контрол правил
 myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  //Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(init);

//accordion
$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: 'content',
  });
});

//burger
const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.burger-close');
const itemClose = document.querySelector('.nav__list');
const menuBurger = document.querySelector('.nav');


burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add('burger-active');
});

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
});

itemClose.addEventListener('click', () => {
  menuBurger.classList.remove('burger-active');
});

//search-1024
const search = document.querySelector('.search');
const body = document.querySelector('body');
const b = document.querySelector('.search__form');

search.addEventListener('click', function (e) {
  e.stopPropagation();
  this.classList.add('search--active');
});

body.addEventListener('click', function () {
  search.classList.remove('search--active');
});
b.addEventListener('click', function () {
  search.classList.remove('search--active');
});