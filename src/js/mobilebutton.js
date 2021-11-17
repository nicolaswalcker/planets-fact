const mobileButton = document.querySelector('.js-mobile');
const navbar = document.querySelector('.js-navbar');

mobileButton.addEventListener('click', ()=>{
    mobileButton.classList.toggle('u-button--active');
    navbar.classList.toggle('u-navbar--active');
})