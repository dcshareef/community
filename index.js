// Navbar
let hamburger = document.querySelector('.hamburger')
let menu = document.querySelector('.navMenu')
let logo = document.querySelector('.logo')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle('active')
    logo.classList.toggle('active')
})