'use strict'

const icon = (document.querySelector('.header__mobile') as HTMLElement)
const nav = (document.querySelector('.header__menu') as HTMLElement)

icon.addEventListener('click',() : void => {
    nav.classList.toggle('ver')
})