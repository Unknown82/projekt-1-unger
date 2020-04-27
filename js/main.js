window.addEventListener('DOMContentLoaded', function() {

    'use strict';

        // Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.control-slayer__img'),
        prev = document.querySelector('.control-pfeil__left'),
        next = document.querySelector('.control-pfeil__right'),
        dotsWrap = document.querySelector('.control-slayer'),
        dots = document.querySelectorAll('.control-slayer__radius'),
        menuWrap = document.querySelector('.control-menu'),
        menu = document.querySelectorAll('.control-menu__link');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('control-slayer__radius-white'));

        menu.forEach((item) => item.classList.remove('control-menu__link-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('control-slayer__radius-white');
        menu[slideIndex - 1].classList.add('control-menu__link-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('control-slayer__radius') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    menuWrap.addEventListener('click', function(event) {
        for (let i = 0; i < menu.length + 1; i++) {
            if (event.target.classList.contains('control-menu__link') && event.target == menu[i-1]) {
                currentSlide(i);
            }
        }
    });
});