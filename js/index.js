'use strict';
var icon = document.querySelector('.header__mobile');
var nav = document.querySelector('.header__menu');
icon.addEventListener('click', function () {
    nav.classList.toggle('ver');
});
