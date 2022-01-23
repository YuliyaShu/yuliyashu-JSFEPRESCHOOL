console.log("Portfolio 1\n",
"1. Valid validator.W3 10/10\n",
"2. Semantic 20/20\n",
"3. Layout 45/45\n",
"4. CSS Requirements 12/12\n",
"5. CSS Interactivity 20/20",
"\n",
"Portfolio 2\n",
"1. Layout 48/48\n",
"2. Till 3320px 15/15\n",
"3. Adaptive menu 22/22\n");

const burger = document.querySelector('.nav-burger');
const burgerUl = document.querySelector('ul');
const navBurgerMenu = document.querySelector('.nav-burger-menu');
const navBurgerMenuContainer = document.querySelector('.nav-burger-menu-container');
const navBurgerMenuList = document.querySelector('.nav-burger-menu-list');
const navBurgerMenuLink1 = document.querySelector('.nav-burger-menu-link-1');
const navBurgerMenuLink2 = document.querySelector('.nav-burger-menu-link-2');
const navBurgerMenuLink3 = document.querySelector('.nav-burger-menu-link-3');
const navBurgerMenuLink4 = document.querySelector('.nav-burger-menu-link-4');
const navBurgerMenuLink5 = document.querySelector('.nav-burger-menu-link-5');
const headerContainer = document.querySelector('.header-container');

function toggleMenu() {
  
  burgerUl.classList.toggle('open');
  navBurgerMenu.classList.toggle('open');
  navBurgerMenuContainer.classList.toggle('open');
  navBurgerMenuList.classList.toggle('open');
  navBurgerMenuLink1.classList.toggle('open');
  navBurgerMenuLink2.classList.toggle('open');
  navBurgerMenuLink3.classList.toggle('open');
  navBurgerMenuLink4.classList.toggle('open');
  navBurgerMenuLink5.classList.toggle('open');
  burger.classList.toggle('open');
  
  
  
}


burger.addEventListener('click', toggleMenu);
navBurgerMenuLink1.addEventListener('click', toggleMenu);
navBurgerMenuLink2.addEventListener('click', toggleMenu);
navBurgerMenuLink3.addEventListener('click', toggleMenu);
navBurgerMenuLink4.addEventListener('click', toggleMenu);
navBurgerMenuLink5.addEventListener('click', toggleMenu);







