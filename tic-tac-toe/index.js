console.log('Self check\n',
'')

const boxes = document.getElementsByClassName('box');
const wrapper = document.querySelector('.wrapper');
const winnerText = document.querySelector('.winner-text');
const newGame =document.querySelector('.new-game');
const newGameText =document.querySelector('.new-game-text');
const wallE = document.querySelector('.wall-e');
const eve =document.querySelector('.eve');
const results = document.querySelector('.results');



const matches = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


function wallESound() {
    let audio = new Audio('./assets/audio/Eve_Says_Wall-E_Sound_Effect.mp3');
    audio.currentTime = 0; 
    audio.play();
}
wallE.addEventListener('click', wallESound);


function eveSound() {
    let audio = new Audio('./assets/audio/Wall-E_Says_Eve_Sound_Effect.mp3');
    audio.currentTime = 0; 
    audio.play();
}
eve.addEventListener('click', eveSound);

let obj = JSON.parse(localStorage.getItem('winner')) || {};

let countGames = 0;
console.log(obj)
function results10() {
        let key = Object.keys(obj).length + 1;
        let objString = JSON.stringify(obj);
        if (key === 11) {
            for (let i = 1; i < 11; i++) {
                obj[i] = obj[i + 1];
            }
            delete obj[10];
            console.log(obj);
            key = 10;
        }
            obj[key] = `${winnerForStorage}`;
            objString = JSON.stringify(obj);
            localStorage.setItem('winner', objString);
            
            console.log(obj);       
}


let winnerForStorage;
let winnerFinal;

let clicks = 0;
wrapper.addEventListener('click', (e) => {
    clicks++;
    if(e.target.classList.contains('box-walle') 
    || e.target.classList.contains('box-eve')) {
        clicks--;
        return 'Choose another box';
    }

    (clicks % 2 !== 0) ? e.target.classList.add('box-walle') : e.target.classList.add('box-eve');

  
    for (let i = 0; i < 8; i++) {
        if (boxes[matches[i][0]].classList.contains('box-walle')
        && boxes[matches[i][1]].classList.contains('box-walle')
        && boxes[matches[i][2]].classList.contains('box-walle')){
            winner('WALL-E');
            winnerForStorage = 'WALL-E';
            wallESound();
            results10();   
            tableCreate();
            break;

        } else if (boxes[matches[i][0]].classList.contains('box-eve')
        && boxes[matches[i][1]].classList.contains('box-eve')
        && boxes[matches[i][2]].classList.contains('box-eve')){
            winner('EVE');
            winnerForStorage = 'EVE';
            eveSound();
            results10();
            tableCreate();
            break;
            
        } else if (clicks === 9) {
            winnerText.textContent = `DRAW`;
            newGame.style.display = 'flex';
            wrapper.classList.add('disabledWrapper');
        }
        continue;
    }
})


function winner(x) {
    winnerText.textContent = `${x} WON IN ${clicks} moves`;
    newGame.style.display = 'flex';
    wrapper.classList.add('disabledWrapper');
}

newGameText.addEventListener('click', function (e) {
    document.location.reload();
})





function tableCreate() {
    results.innerHTML = '';
    
   
    
    let tableOfResults = document.createElement('table');
    results.appendChild(tableOfResults);
    tableOfResults.classList.add('table-results');
    let row = document.createElement("tr");
            tableOfResults.appendChild(row);
            let cell1Head = document.createElement("th");
            cell1Head.innerHTML = 'Game';
            row.appendChild(cell1Head);
            let cell2Head = document.createElement("th");
            cell2Head.innerHTML = 'Winner';
            row.appendChild(cell2Head);
    
    for (let i = 0; i < Object.keys(obj).length; i++) {
            // creates a table row
            let row = document.createElement("tr");
            tableOfResults.appendChild(row);
            
            let cell1 = document.createElement("td");
            cell1.innerHTML = `${i + 1}`;
            row.appendChild(cell1);
            let cell2 = document.createElement("td");
            cell2.innerHTML = `${obj[i + 1]}`
            row.appendChild(cell2);
            // document.createTextNode(`${i + 1}`);
            // document.createElement("td");
            // document.createTextNode(`${obj[i + 1]}`);
    
        }
}
tableCreate();

const clear = document.querySelector('.clear');
function clearTable() {
    localStorage.removeItem('winner');
    // results.innerHTML = '';
    document.location.reload();
}
clear.addEventListener('click', clearTable)