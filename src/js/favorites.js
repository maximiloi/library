const selectionLabelElelms = document.querySelectorAll('.selection__label');
const booksLists = document.querySelectorAll('.books__list');

export function handlingFavoritesSectionClick(value) {
  selectionLabelElelms.forEach((elem) => {
    elem.classList.remove('active');

    if (value === elem.htmlFor) {
      elem.classList.add('active');
    }
  });

  booksLists.forEach((elem) => {
    elem.classList.add('hidden');
    elem.classList.remove('active');

    if (value === elem.dataset.season) {
      elem.classList.add('active');
      elem.classList.remove('hidden');
    }
  });
}
