import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  pagination: {
    el: '.carousel__pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.carousel__arrow--prev',
    nextEl: '.carousel__arrow--next',
  },
  breakpoints: {
    999: {
      slidesPerView: 1,
    },
    1259: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
