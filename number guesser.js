const add = document.querySelector('#rightControl');
const sub = document.querySelector('#leftControl');
const guess = document.querySelector('.guess');
const humanGuess = document.querySelector('#humanInput');
const nextRound = document.querySelector('.round1');
let humanScore = document.querySelector('.humanScoreObtained');
let computerScore = document.querySelector('.computerScoreObtained');
const rounds = document.querySelector('.roundNumber');
const failed = document.querySelector('.failed');
const targetNumber = document.querySelector('.targetNumber');
const computerGuess = document.querySelector('.numberGuessed');
const computerWin = document.querySelector('.computerWin') ;

add.addEventListener('click', () => {
    if (humanGuess.value < humanGuess.max) {
        humanGuess.value++;
    }
})

sub.addEventListener('click', () => {
    if (humanGuess.value > humanGuess.min) {
        humanGuess.value--;
    }
})


guess.addEventListener('click', () => {
    nextRound.removeAttribute('disabled');

    if (nextRound.classList.contains('round1')) {
        nextRound.classList.add('played');
        nextRound.classList.remove('round1');
    }

    let randomTargetNumber = Math.floor(Math.random() * 10);
    targetNumber.innerText = randomTargetNumber;

    let randomComputerNumber = Math.floor(Math.random() * 10);
    computerGuess.innerText = randomComputerNumber;

    if (randomTargetNumber === parseFloat(humanGuess.value)) {
        humanScore.innerText = parseFloat(humanScore.innerText) + 1;
        guess.innerText = 'You Win!!!';
        guess.classList.add('guessed');
        guess.classList.remove('guess');
        
    } else if (randomTargetNumber === parseFloat(randomComputerNumber)) {
        computerScore.innerText = parseFloat(computerScore.innerText) + 1;
        computerWin.style.display = 'block';
        guess.classList.remove('guess');
        guess.classList.remove('guessed');
        guess.classList.add('disableGuess');

    } else if(randomTargetNumber !== parseFloat(randomComputerNumber) || randomTargetNumber !== parseFloat(humanGuess.value)){
        guess.classList.remove('guess');
        guess.classList.remove('guessed');
        guess.classList.add('disableGuess');
        guess.disabled = 'true';
        failed.style.display = 'block';
    }
})

nextRound.addEventListener('click', () => {
    if (nextRound.classList.contains('played')) {
        nextRound.classList.add('round1');
        nextRound.classList.remove('played');
    }
    rounds.innerText = parseInt(rounds.innerText) + 1;
    targetNumber.innerText = '?';
    guess.removeAttribute('disabled')
    guess.classList.remove('guessed');
    guess.classList.remove('disableGuess');
    guess.classList.add('guess');
    humanGuess.value = 0;
    computerGuess.innerText = '?';
    failed.style.display = 'none';
    guess.innerText = 'Make a Guess'
    computerWin.style.display = 'none';

    nextRound.disabled = 'true';
})