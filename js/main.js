window.addEventListener('DOMContentLoaded', function() {

    'use strict';

        // Slider

    const entities = [
        {
            stadt: 'Rostov-on-Don<br> LCD admiral',
            slides: 'https://www.purinaone.ru/cat/sites/purinaone.ru/files/2019-03/kittens-cat3.jpg'
        },
        {
            stadt: 'Sochi<br> Thieves',
            slides: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3463-3139-4630-b563-646166616434__20180225_gaf_uw8_101.jpg'
        },
        {
            stadt: 'Rostov-on-Don<br> Patriotic,
            slides: 'https://whiskas.ru/upload/medialibrary/392/%D0%9A%D0%BE%D0%B3%D0%B4%D0%B0_%D1%83_%D0%BA%D0%BE%D1%82%D0%B5%D0%BD%D0%BA%D0%B0_%D0%BE%D1%82%D1%80%D1%8B%D0%B2%D0%B0%D1%8E%D1%82%D1%81%D1%8F_%D0%B3%D0%BB%D0%B0%D0%B7%D0%BA%D0%B8_1404x879.png'
        }
        ]
    let slideIndex = 1,
        slides = document.querySelectorAll('.control-slayer__img'),
        prev = document.querySelector('.control-pfeil__left'),
        next = document.querySelector('.control-pfeil__right'),
        dotsWrap = document.querySelector('.control-slayer'),
        dots = document.querySelectorAll('.control-slayer__radius'),
        menuWrap = document.querySelector('.control-menu'),
        menu = document.querySelectorAll('.control-menu__link'),
        stadt = document.querySelectorAll('.control-info__text1'),
        masse = document.querySelectorAll('.control-info__text2'),
        zeit = document.querySelectorAll('.control-info__text3');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        dots.forEach((item) => item.classList.remove('control-slayer__radius-white'));

        menu.forEach((item) => item.classList.remove('control-menu__link-active'));

        stadt.forEach((item) => item.style.display = 'none');

        masse.forEach((item) => item.style.display = 'none');

        zeit.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('control-slayer__radius-white');
        menu[slideIndex - 1].classList.add('control-menu__link-active');
        stadt[slideIndex - 1].style.display = 'block';
        masse[slideIndex - 1].style.display = 'block';
        zeit[slideIndex - 1].style.display = 'block';
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