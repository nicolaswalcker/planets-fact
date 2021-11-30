const mobileButton = document.querySelector('.js-mobile');
const navbar = document.querySelector('.js-navbar');
const body = document.querySelector('body');

mobileButton.addEventListener('click', ()=>{
    mobileButton.classList.toggle('u-button--active');
    navbar.classList.toggle('u-navbar--active');
    if(navbar.classList.contains("u-navbar--active")){
      body.style.overflow = "hidden";
    }
})
