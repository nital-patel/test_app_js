const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
    let name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}

document.addEventListener("DOMContentLoaded", function () {
    function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'you clicked the button!';
        document.body.appendChild(para);

    }
    const buttons = document.querySelectorAll('button');

    for (let i=0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }

});

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.loworHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessFiels = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;