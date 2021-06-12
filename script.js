'use strict';

const init = function () {
  const openMenuBtn = document.querySelector('.hamburger-menu');
  const closeMenuBtn = document.querySelector('.hamburger-close');
  const mobileNavMenu = document.querySelector('.hamburger-container');
  const logo = document.querySelector('.header-logo');

  openMenuBtn.addEventListener('click', function () {
    mobileNavMenu.classList.remove('hidden');
    logo.style.position = 'fixed';
  });

  closeMenuBtn.addEventListener('click', function () {
    mobileNavMenu.classList.add('hidden');
    logo.style.position = '';
  });
};
init();
