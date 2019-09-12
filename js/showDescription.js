/* eslint-disable no-undef */
const showDescription = (function() {
  'use strict';

  const _acc = document
      .getElementsByClassName('info__content__description__block');

  const _panel = document
      .getElementsByClassName('info__content__description__info');

  const _iconList = document
      .getElementsByClassName('info__content__description__block__icon');

  const _sideImage = document
      .getElementsByClassName('info__content__image')[0];

  return {
    init: () => {
      for (let i = 0; i < _acc.length; i++) {
        _acc[i].onclick = function() {
          let setClasses = !this.classList.contains('active');
          setClass(_acc, 'active', 'remove');
          setClass(_panel, 'show', 'remove');
          setClass(_iconList, 'rotate', 'remove');

          switch (i) {
            case 0:
              _sideImage.src = './img/content_image_one.png';
              break;

            case 1:
              _sideImage.src = './img/content_image_two.png';
              break;

            case 2:
              _sideImage.src = './img/content_image_three.png';
              break;
          }

          if (setClasses) {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
            this.lastElementChild.classList.toggle('rotate');
          }
        };
      }

      function setClass(els, className, fnName) {
        for (let i = 0; i < els.length; i++) {
          els[i].classList[fnName](className);
        }
      }
    },
  };
}());

export default showDescription;
