import i18Obj from './translate.js';


//self-check

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


let forLocalStorage = 
        {lang: 'en',
        theme: 'dark'
};



//burger-menu

const burger = document.querySelector('.nav-burger');
const burgerHeroContainerHight = document.querySelector('.hero-container');
const burgerHeaderContainerHight = document.querySelector('.header-container');
const burgerUl = document.querySelector('ul');
const navBurgerMenu = document.querySelector('.nav-burger-menu');
const navBurgerMenuContainer = document.querySelector('.nav-burger-menu-container');
const navBurgerMenuList = document.querySelector('.nav-burger-menu-list');
const navBurgerMenuLink1 = document.querySelector('.nav-burger-menu-link-1');
const navBurgerMenuLink2 = document.querySelector('.nav-burger-menu-link-2');
const navBurgerMenuLink3 = document.querySelector('.nav-burger-menu-link-3');
const navBurgerMenuLink4 = document.querySelector('.nav-burger-menu-link-4');
const navBurgerMenuLink5 = document.querySelector('.nav-burger-menu-link-5');



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
  burgerHeaderContainerHight.classList.toggle('header-container-1024');
  burgerHeroContainerHight.classList.toggle('hero-container-1024');

  
}

burger.addEventListener('click', toggleMenu);
navBurgerMenuLink1.addEventListener('click', toggleMenu);
navBurgerMenuLink2.addEventListener('click', toggleMenu);
navBurgerMenuLink3.addEventListener('click', toggleMenu);
navBurgerMenuLink4.addEventListener('click', toggleMenu);
navBurgerMenuLink5.addEventListener('click', toggleMenu);

//change class active

function changeClassActive() {

}


//translate

const languageEn = document.querySelector('.language-en');
const languageRu = document.querySelector('.language-ru');
const elementsWithData = document.querySelectorAll("[data-i18]");


function getTranslateEn() {
    elementsWithData.forEach(currentValue => {
        const currentValueDataset = currentValue.dataset.i18;
        currentValue.textContent = i18Obj.en[currentValueDataset]; 
        if (currentValue.placeholder) {
            currentValue.placeholder= i18Obj.en[currentValueDataset];
            currentValue.textContent = '';
          }
        languageEn.classList.add('language-beige');
        languageRu.classList.remove('language-beige');
        
    });
    forLocalStorage.lang = 'en';
    
    const languageEnLight = document.querySelector('.language-en-white-light');
    const languageRuLight = document.querySelector('.language-ru-white-light');
    languageEnLight.classList.add('text-color-white-only');
    languageRuLight.classList.remove('text-color-white-only');
    languageEnLight.classList.remove('language-beige');
    
}

function getTranslateRu() {
    elementsWithData.forEach(currentValue => {
        const currentValueDataset = currentValue.dataset.i18;
        currentValue.textContent = i18Obj.ru[currentValueDataset];    
        if (currentValue.placeholder) {
            currentValue.placeholder = i18Obj.ru[currentValueDataset];
            currentValue.textContent = '';
          }    
        languageRu.classList.add('language-beige');
        languageEn.classList.remove('language-beige'); 
        
               
    });
    forLocalStorage.lang = 'ru';
    
    const languageEnLight = document.querySelector('.language-en-white-light');
    const languageRuLight = document.querySelector('.language-ru-white-light');
    languageRuLight.classList.add('text-color-white-only');
    languageEnLight.classList.remove('text-color-white-only');
    languageRuLight.classList.remove('language-beige'); 
    
}



languageEn.addEventListener('click', getTranslateEn);
languageRu.addEventListener('click', getTranslateRu);


// portfolio images

const portfolioImages = document.querySelectorAll('.portfolio-img');
const winterButton = document.querySelector('.portfolio-button-winter');
const springButton = document.querySelector('.portfolio-button-spring');
const summerButton = document.querySelector('.portfolio-button-summer');
const autumnButton = document.querySelector('.portfolio-button-autumn');
const winterButtonText = document.querySelector('.portfolio-button-text-winter');
const springButtonText = document.querySelector('.portfolio-button-text-spring');
const summerButtonText = document.querySelector('.portfolio-button-text-summer');
const autumnButtonText = document.querySelector('.portfolio-button-text-autumn');
function getWinterImages() {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
    winterButton.classList.add('active');
    springButton.classList.remove('active');
    summerButton.classList.remove('active');
    autumnButton.classList.remove('active');
    winterButtonText.classList.add('portfolio-button-text-black');
    springButtonText.classList.remove('portfolio-button-text-black');
    summerButtonText.classList.remove('portfolio-button-text-black');
    autumnButtonText.classList.remove('portfolio-button-text-black');
}
function getSpringImages() {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
    springButton.classList.add('active');
    winterButton.classList.remove('active');
    summerButton.classList.remove('active');
    autumnButton.classList.remove('active');
    springButtonText.classList.add('portfolio-button-text-black');
    winterButtonText.classList.remove('portfolio-button-text-black');
    summerButtonText.classList.remove('portfolio-button-text-black');
    autumnButtonText.classList.remove('portfolio-button-text-black');
}
function getSummerImages() {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
    summerButton.classList.add('active');
    winterButton.classList.remove('active');
    springButton.classList.remove('active');
    autumnButton.classList.remove('active');
    summerButtonText.classList.add('portfolio-button-text-black');
    winterButtonText.classList.remove('portfolio-button-text-black');
    springButtonText.classList.remove('portfolio-button-text-black');
    autumnButtonText.classList.remove('portfolio-button-text-black');
}
function getAutumnImages() {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
    autumnButton.classList.add('active');
    winterButton.classList.remove('active');
    summerButton.classList.remove('active');
    springButton.classList.remove('active');
    autumnButtonText.classList.add('portfolio-button-text-black');
    winterButtonText.classList.remove('portfolio-button-text-black');
    summerButtonText.classList.remove('portfolio-button-text-black');
    springButtonText.classList.remove('portfolio-button-text-black');
}
winterButton.addEventListener('click', getWinterImages);
springButton.addEventListener('click', getSpringImages);
summerButton.addEventListener('click', getSummerImages);
autumnButton.addEventListener('click', getAutumnImages);



// try to modify portfolio images code

// const portfolioImages = document.querySelectorAll('.portfolio-img');
// const button = document.querySelectorAll('.portfolio-button');
// console.log(button.dataset.season);
// function getImages(event) {
//     if(event.target.classList.contains('portfolio-button')) {
//     portfolioImages.forEach((img, index) => img.src = `./assets/img/button.dataset.season/${index + 1}.jpg`);
// }
// }
// button.addEventListener('click', getImages)


// cash

const seasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadImages() {
    seasons.forEach (season => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${season}/${i}.jpg`;
          }
    }) 
  }
  preloadImages();


  //light theme

  
  const moonSunButton = document.querySelector('.moon-sun-button');
  
  function getLightTheme() {


      const itemsForWhiteBackground = document.querySelectorAll('body, .section-title, .contacts-button, .hero-button');
      itemsForWhiteBackground.forEach(item =>{
        item.classList.toggle('background-light');
        })

      const blackGoldButtonLight = document.querySelectorAll('.portfolio-button, .price-button, .contacts-button');
      blackGoldButtonLight.forEach(item =>{
        item.classList.toggle('background-black-light');
        item.classList.toggle('background-gold');
      })

      const backgroundBlackLight = document.querySelectorAll('.portfolio-button-text, .hero-button-text, .price-button-text,.contacts-button-text');
      backgroundBlackLight.forEach(item =>{
        item.classList.toggle('black-gold-button-light');
      })
     

      const sunToMoom = document.querySelector('.moon-sun-button');
      sunToMoom.classList.toggle('moon-button');

      const heroContainerLight = document.querySelector('.hero-container');
      heroContainerLight.classList.toggle('hero-container-light');

      const sectionContactsLight = document.querySelector('.section-contacts');
      sectionContactsLight.classList.toggle('section-contacts-light');

      const sectionLines = document.querySelectorAll('.section-lines');
      sectionLines.forEach(line => {
          line.classList.toggle('section-lines-light');
      })

      const textColorBlack = document.querySelectorAll('.section-title, .language-white, .hero-title, .hero-text, .skills-name, .skills-text, .portfolio-button-text, .price-name, .price-number, .price-text, .section-title-contacts, .footer-text, .footer-link, .footer-link-name');
      textColorBlack.forEach(text => {
          text.classList.toggle('text-color-black');
          
      })

      const navLinkLightHover = document.querySelectorAll('.nav-link, .nav-link-light');
      navLinkLightHover.forEach(text => {
          text.classList.toggle('nav-link-light');
          text.classList.toggle('nav-link');
          
      })


      const contactInputFormLight = document.querySelectorAll('.contacts-input, .contacts-input-message');
      contactInputFormLight.forEach(contact => {
          contact.classList.toggle('contacts-input-light');
          
      })

      const placeholderBlack = document.querySelectorAll('.contacts-input, .contacts-input-message');
      placeholderBlack.forEach(placeholder => {
        placeholder.classList.add('contacts-input-light');
      })


      const hrBurgerLight = document.querySelectorAll('.hr-burger');
      hrBurgerLight.forEach(hr => {
          hr.classList.toggle('hr-burger-light');
    })

      const burgerLines = document.querySelectorAll('.nav-burger-menu, .nav-burger-menu-link-1, .nav-burger-menu-link-2, .nav-burger-menu-link-3, .nav-burger-menu-link-4, .nav-burger-menu-link-5');
      burgerLines.forEach(line => {
          line.classList.toggle('background-light');
          line.classList.toggle('text-color-black');
      })
       

      const headerLogoImgLight = document.querySelector('.logo-img-light');
      headerLogoImgLight.classList.toggle('logo-img-light-2');


      const languageWhite = document.querySelectorAll('.language-white');
      languageWhite.forEach(lang => {
        
        lang.classList.add('language-white-light');
       
      })

      const languageEnWhite = document.querySelectorAll('.language-en');
      languageEnWhite.forEach(lang => {
        
        lang.classList.toggle('language-en-white-light');
        
       
      })

      const languageRuWhite = document.querySelectorAll('.language-ru');
      languageRuWhite.forEach(lang => {
        
        lang.classList.toggle('language-ru-white-light');
       
      })

      const footercLight = document.querySelector('.footer-c');
      footercLight.classList.toggle('footer-c-light');

      const instagramLight = document.querySelector('.instagram');
      instagramLight.classList.toggle('instagram-light');

      const facebookLight = document.querySelector('.facebook');
      facebookLight.classList.toggle('facebook-light');

      const twitterLight = document.querySelector('.twitter');
      twitterLight.classList.toggle('twitter-light');

      const pinterestLight = document.querySelector('.pinterest');
      pinterestLight.classList.toggle('pinterest-light');

 if (forLocalStorage.theme === 'dark') {
    forLocalStorage.theme = 'light';
 } else {
    forLocalStorage.theme = 'dark';
 }
      
      console.log(forLocalStorage.theme);
     
      

  }

  moonSunButton.addEventListener('click', getLightTheme);

  
  

  function setLocalStorage() {
    localStorage.setItem('lang', forLocalStorage.lang);
    localStorage.setItem('theme', forLocalStorage.theme);
  }
  window.addEventListener('beforeunload', setLocalStorage)


  function getLocalStorage() {

    if(localStorage.getItem('theme')) {
        if(localStorage.getItem('theme') === 'light') {
            getLightTheme('theme');
          } 
      }
    if(localStorage.getItem('lang') === 'en') {
        
      getTranslateEn('lang');
    } else {
        getTranslateRu('lang');
    }
  }
  window.addEventListener('load', getLocalStorage)

