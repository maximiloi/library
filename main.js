import './style.scss';

import './src/js/swiper';
import { handlingFavoritesSectionClick } from './src/js/favorites';

const documentActions = (e) => {
  const targetElem = e.target;

  if (targetElem.closest('.selection__input')) {
    handlingFavoritesSectionClick(targetElem.value);
  }
};

document.addEventListener('click', documentActions);
