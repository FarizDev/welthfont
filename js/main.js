
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobileMenu');



burger.addEventListener('click', function()
{
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

const menu__link = document.querySelectorAll(".menu__link");
const button = document.querySelectorAll(".button");

menu__link.forEach(n => n.addEventListener("click", closeMenu));
button.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    burger.classList.remove("active");
    mobileMenu.classList.remove("active");
}