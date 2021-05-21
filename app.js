const burgerIcon = document.getElementById('nav__burger-icon');
const nav = document.getElementById('nav__list');


burgerIcon.addEventListener('click', () => {
    nav.classList.toggle('show')
    console.log('hello')
})
