/* eslint-disable no-undef */
import {modalModule} from '../modules/modalModule.js';

const modalGallery = (function() {
  'use strict';

  const _modal = document.getElementsByClassName('modal')[0];
  const _imgList = document
      .getElementsByClassName('info__article__block--no-transition');
  const _modalImg = document.getElementsByClassName('modal__content')[0];

  return {
    init: () => {
      for (let i = 0; i < _imgList.length; i++) {
        _imgList[i].onclick = function() {
          modalModule.openModal(_modal);
          _modalImg.src = _imgList[i].firstChild.src;

          _modal.onclick = function(e) {
            if (!e.target.classList.contains('modal__content')) {
              modalModule.closeModal(_modal);
            }
          };
        };
      }
    },
  };
}());

export default modalGallery;

