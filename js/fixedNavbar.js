/* eslint-disable no-undef */

const fixedNavbar = (function() {
  'use strict';

  const _myNav = document.getElementsByClassName('banner__navbar')[0];

  return {
    init: () => {
      if (window.scrollY >= 200) {
        _myNav.classList.add('banner__navbar--colored');
        _myNav.classList.remove('banner__navbar--transparent');
      } else {
        _myNav.classList.add('banner__navbar--transparent');
        _myNav.classList.remove('banner__navbar--colored');
      }
    },
  };
}());

export default fixedNavbar;

