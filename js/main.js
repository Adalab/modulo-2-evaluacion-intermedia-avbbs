'use strict';

const selectRace = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const result = document.querySelector('.js-textResult');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   };

const listEnemies = []
const battle = () => {
    const randomNumber = getRandomNumber(6);
    const raceOne = 2;
    const raceTwo = 2;
    const raceThree = 2;
    const raceFour = 3;
    const raceFive = 5;

    
};

/*function paintResult() {
    
   // result.innerHTML =
};*/


   
function handleClick(event) {
    event.preventDefault();
    const selectValue = selectRace.value;
};

btn.addEventListener('click', handleClick);