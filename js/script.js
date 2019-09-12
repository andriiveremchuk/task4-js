/* eslint-disable no-undef */
// js-task-5

import fixedNavbar from './fixedNavbar.js';

window.onscroll = function() {
  fixedNavbar.init();
};

// js-task-6

import showDescription from './showDescription.js';

showDescription.init();

// js-task-7

import carousel from './carousel.js';

carousel.init();

// js-task-8

import modalGallery from './modalGallery.js';

modalGallery.init();

// js-task-10

import fetchApiModule from './fetchApiModule.js';

fetchApiModule.init();
