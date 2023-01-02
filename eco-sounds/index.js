console.log('Self check \n',
'1. Верстка +10\n',
'2. Меняются изображения и звук +20\n',
'3. Стиль активного элемента +10\n',
'4. Функциональная play/pause +20\n',
'5. Доп функционал: птички возле play/pause с эффектом при наведении, адаптивная верстка +10\n')



//audio play paused


const audio = document.querySelector('audio');
const playButton = document.querySelector('.play-button');
const playButtonSize = document.querySelector('.button-size');


let isPlay = false;
function playPauseAudio() {
    if (audio.currentTime === 0) {
        audio.play(); 
        playButtonSize.classList.add('button-size-two');
        isPlay = true;
    } else {
            audio.pause();
            playButtonSize.classList.remove('button-size-two');
            isPlay = false;
            audio.currentTime = 0;
        } 
    }
playButton.addEventListener('click', playPauseAudio);


// change pictures, sounds, birds

const pictures = document.querySelector('.pictures');
const birdsPictures = document.querySelectorAll('.birds-pictures');
const solovey = document.querySelector('.solovey');
const birds1 = document.querySelector('.birds-pictures1');
const birds2 = document.querySelector('.birds-pictures2');

function divForPictures() {
    for (i = 0; i < birdsPictures.length; i++){

        birdsPictures[i].classList.remove('divForPictures');
     }
}

function changePictureSolovey() {
    pictures.className = "";
    pictures.classList.add('pictures');
    pictures.classList.add('pictures-solovey');
    audio.src = './assets/audio/solovey.mp3';
    solovey.classList.add('bird-text-white');
    drozd.classList.remove('bird-text-white');
    malinovka.classList.remove('bird-text-white');
    javoronok.classList.remove('bird-text-white');
    slavka.classList.remove('bird-text-white');
    logo.classList.remove('logo-white');
    birds1.src='./assets/img/solovey1.png';
    birds2.src='./assets/img/solovey2.png';
    
}
solovey.addEventListener('click', changePictureSolovey);
solovey.addEventListener('click', playPauseAudio);
solovey.addEventListener('click', divForPictures);

const drozd = document.querySelector('.drozd');
function changePictureDrozd() {
    pictures.className = "";
    pictures.classList.add('pictures');
    pictures.classList.add('pictures-drozd');
    audio.src = './assets/audio/drozd.mp3';
    solovey.classList.remove('bird-text-white');
    drozd.classList.add('bird-text-white');
    malinovka.classList.remove('bird-text-white');
    javoronok.classList.remove('bird-text-white');
    slavka.classList.remove('bird-text-white');
    logo.classList.remove('logo-white');
    birds1.src='./assets/img/drozd1.png';
    birds2.src='./assets/img/drozd2.png';
}
drozd.addEventListener('click', changePictureDrozd);
drozd.addEventListener('click', playPauseAudio);
drozd.addEventListener('click', divForPictures);

const malinovka = document.querySelector('.malinovka');
function changePictureMalinovka() {
    pictures.className = "";
    pictures.classList.add('pictures');
    pictures.classList.add('pictures-malinovka');
    audio.src = './assets/audio/zarynka.mp3';
    solovey.classList.remove('bird-text-white');
    drozd.classList.remove('bird-text-white');
    malinovka.classList.add('bird-text-white');
    javoronok.classList.remove('bird-text-white');
    slavka.classList.remove('bird-text-white');
    logo.classList.remove('logo-white');
    birds1.src='./assets/img/malinovka1.png';
    birds2.src='./assets/img/malinovka2.png';
}
malinovka.addEventListener('click', changePictureMalinovka);
malinovka.addEventListener('click', playPauseAudio);
malinovka.addEventListener('click', divForPictures);

const javoronok = document.querySelector('.javoronok');
function changePictureJavoronok() {
    pictures.className = "";
    pictures.classList.add('pictures');
    pictures.classList.add('pictures-javoronok');
    audio.src = './assets/audio/javoronok.mp3';
    solovey.classList.remove('bird-text-white');
    drozd.classList.remove('bird-text-white');
    malinovka.classList.remove('bird-text-white');
    javoronok.classList.add('bird-text-white');
    slavka.classList.remove('bird-text-white');
    logo.classList.remove('logo-white');
    birds1.src='./assets/img/javoronok1.png';
    birds2.src='./assets/img/javoronok2.png';
}
javoronok.addEventListener('click', changePictureJavoronok);
javoronok.addEventListener('click', playPauseAudio);
javoronok.addEventListener('click', divForPictures);

const slavka = document.querySelector('.slavka');
function changePictureSlavka() {
    pictures.className = "";
    pictures.classList.add('pictures');
    pictures.classList.add('pictures-slavka');
    audio.src = './assets/audio/slavka.mp3';
    solovey.classList.remove('bird-text-white');
    drozd.classList.remove('bird-text-white');
    malinovka.classList.remove('bird-text-white');
    javoronok.classList.remove('bird-text-white');
    slavka.classList.add('bird-text-white');
    logo.classList.remove('logo-white');
    birds1.src='./assets/img/slavka1.png';
    birds2.src='./assets/img/slavka2.png';
}
slavka.addEventListener('click', changePictureSlavka);
slavka.addEventListener('click', playPauseAudio);
slavka.addEventListener('click', divForPictures);

const logo = document.querySelector('.logo');
function changePictureForest() {
    pictures.className = "";
    pictures.classList.add('pictures');
    audio.src = './assets/audio/forest.mp3';
    solovey.classList.remove('bird-text-white');
    drozd.classList.remove('bird-text-white');
    malinovka.classList.remove('bird-text-white');
    javoronok.classList.remove('bird-text-white');
    slavka.classList.remove('bird-text-white');
    logo.classList.add('logo-white');
    for (i = 0; i < birdsPictures.length; i++){

        birdsPictures[i].classList.add('divForPictures');
     }
}
logo.addEventListener('click', changePictureForest);
logo.addEventListener('click', playPauseAudio);



// cash

const cashPictures = ['solovey', 'drozd', 'malinovka', 'javoronok', 'slavka'];
function preloadImages() {
    cashPictures.forEach (picture => {
        for(let i = 1; i <= 2; i++) {
            const img = new Image();
            img.src = `./assets/img/${picture}${i}.png`;
            img.src = `./assets/img/${picture}.jpg`
        }
    }) 
  }
  preloadImages();
