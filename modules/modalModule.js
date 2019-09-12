/* eslint-disable no-undef */
const modalModule = (function() {
  'use strict';

  return {
    openModal: (modal) => {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    },
    closeModal: (modal) => {
      modal.style.display = 'none';
      document.body.style.overflow = 'visible';
    },
  };
}());

export {modalModule};
