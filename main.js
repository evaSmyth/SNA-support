'use strict'

const hamburgerBtn  = document.querySelector('.hamburg-btn');
const navList = document.querySelector('.main-nav');
const removeNav = document.querySelector('.remove-nav');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer-container')
const footerBand = document.querySelector('.top-footer-band')

document.getElementById("year").innerHTML = new Date().getFullYear();

const showNav = function() {
    navList.classList.add('nav-bar-show');
    main.classList.add('blur');
    footer.classList.add('blur');
    footerBand.classList.add('blur');
};
const hideNav = function() {
    footer.classList.remove('blur');
    main.classList.remove('blur');
    footerBand.classList.remove('blur');
    navList.classList.remove('nav-bar-show');
    aboutMeDropdown.classList.remove('show-dropdown');
    trainingDropdown.classList.remove('show-dropdown');
    
};
hamburgerBtn.addEventListener('click',showNav);
removeNav.addEventListener('click', hideNav);



const trainingBtn = document.querySelector('.training-btn');
const trainingDropdown = document.querySelector('.training-dropdown');
const shopBtn = document.querySelector('.shop-btn');
const shopDropdown = document.querySelector('.shop-dropdown');
const dropdown = document.querySelectorAll('.dropdown');
const aboutMeBtn = document.querySelector('.abt-me-btn');
const aboutMeDropdown = document.querySelector('.abt-me-dropdown');

aboutMeBtn.addEventListener('click', function() {
    aboutMeDropdown.classList.toggle('show-dropdown');
    trainingDropdown.classList.remove('show-dropdown');
    shopDropdown.classList.remove('show-dropdown');
});

trainingBtn.addEventListener('click', function() {
    trainingDropdown.classList.toggle('show-dropdown');
    aboutMeDropdown.classList.remove('show-dropdown');
    shopDropdown.classList.remove('show-dropdown');
});



















