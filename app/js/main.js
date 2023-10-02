"use strict";

console.clear();

const slider = () => {
  const slides  = Array.from(document.querySelectorAll('.slider__slide'));
  const nav     = Array.from(document.querySelectorAll('.slider__nav-btn'));
  const tabs    = Array.from(document.querySelectorAll('.slider__tab'));
  
  let activeSlide = 0;

  slides[activeSlide].classList.add('slider__slide_active');
  tabs[activeSlide].classList.add('slider__nav-btn_active');

  nav.forEach(item => {
    item.addEventListener('click', e => {
      slides[activeSlide].classList.remove('slider__slide_active');
      tabs[activeSlide].classList.remove('slider__nav-btn_active');

      if(e.target.classList.contains('slider__nav_prev')){
        if (activeSlide === 0) {
          activeSlide = slides.length - 1
        } else{
          activeSlide--
        }
      } else {
        if (activeSlide === slides.length - 1) {
          activeSlide = 0
        } else{
          activeSlide++
        }
      }
      slides[activeSlide].classList.add('slider__slide_active');
      tabs[activeSlide].classList.add('slider__nav-btn_active');
    })
  });
  
  
  tabs.forEach((item, i) => {
    item.addEventListener('click', () => {
      slides[activeSlide].classList.remove('slider__slide_active');
      tabs[activeSlide].classList.remove('slider__nav-btn_active');

      activeSlide = i;

      slides[activeSlide].classList.add('slider__slide_active');
      tabs[activeSlide].classList.add('slider__nav-btn_active');
    });
  });
}


slider()