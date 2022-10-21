// Side Nav Menu, Profile User Menu, & Dropdown Theme
const showNavMenu = document.getElementById('showNavMenu');
const hideNavMenu = document.getElementById('hideNavMenu');
const sideNavMenu = document.getElementById('sideNavMenu');
const sideNavBackdrop = document.getElementById('sideNavBackground');
const profileMenu = document.getElementById('profileMenu');
const btnProfileMenu = document.getElementById('btnProfileMenu');
const themeDropdown = document.getElementById('themeDropdown');
const iconDropdown = document.getElementById('dropdownIcon');
const themeMenu = document.getElementById('themeMenu');

showNavMenu.addEventListener('click', function(){
    sideNavMenu.classList.add('show');
    sideNavBackdrop.classList.add('sideNav-backdrop');
});

hideNavMenu.addEventListener('click', function() {
    sideNavMenu.classList.remove('show');
    sideNavBackdrop.classList.remove('sideNav-backdrop');
});

btnProfileMenu.addEventListener('click', function() {
    profileMenu.classList.toggle('profileMenu-hide');
});

themeDropdown.addEventListener('click', function() {
    iconDropdown.classList.toggle('icon-rotate');
    themeMenu.classList.toggle('show-theme');
});


// Dark Mode Theme
const btnDarkMode = document.getElementById('darkMode');
const btnLightMode = document.getElementById('lightMode');
const systemMode = document.getElementById('systemMode')
const htmlElement = document.querySelector('html');

btnDarkMode.addEventListener('click', function() {
    htmlElement.classList.add('dark');
    htmlElement.classList.remove('light');
    localStorage.theme = 'dark';
});

btnLightMode.addEventListener('click', function() {
    htmlElement.classList.remove('dark');
    htmlElement.classList.add('light');
    localStorage.theme = 'light';
});

systemMode.addEventListener('click', function() {
    if (window.matchMedia('(prefers-color-scheme: dark)')) {
        htmlElement.classList.toggle('dark');
    } else {
        htmlElement.classList.toggle('light');
    }
});

// Active Link Side Menu
const navMenu = document.getElementById('sideMenu');
const menu = document.getElementsByClassName('sideNav-menu');






