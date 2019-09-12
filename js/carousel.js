/* eslint-disable no-undef */
const upperSlides = [...document.getElementsByClassName('upper-slide')];
const lowerSlides = [...document.getElementsByClassName('lower-slide')];
let slideIndex = 1;

showSlides(slideIndex, upperSlides);
showSlides(slideIndex, lowerSlides);

function plusSlidesUpper(n) {
  showSlides(slideIndex += n, upperSlides);
}

function plusSlidesLower(n) {
  showSlides(slideIndex += n, lowerSlides);
}

function showSlides(n, slides) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[slideIndex - 1].style.display = 'block';
}

const carousel = (function() {
  'use strict';

  const _slidersLeft = [...document
      .querySelectorAll('.description__arrow-left'),
  ];
  const _slidersRight = [...document
      .querySelectorAll('.description__arrow-right'),
  ];

  return {
    init: () => {
      _slidersLeft.forEach((el) => {
        _slidersLeft[0].onclick = function() {
          plusSlidesUpper(-1);
        };
        _slidersLeft[1].onclick = function() {
          plusSlidesLower(-1);
        };
      });
      _slidersRight.forEach((el) => {
        _slidersRight[0].onclick = function() {
          plusSlidesUpper(1);
        };
        _slidersRight[1].onclick = function() {
          plusSlidesLower(1);
        };
      });
    },
  };
}());

export default carousel;
