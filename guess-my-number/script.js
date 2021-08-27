"use strict";

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const restarGame = () => {

    document.querySelector('.again').addEventListener('click', () => {

        score = 20;
        secretnumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start guessing ...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    })

}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '🚨 No number1!';

    }
    else if (guess === secretnumber) {
        document.querySelector('.message').textContent = 'Correct number !! 😄';
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }

    else if (guess > secretnumber) {

        if (score > 1) {

            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Lost the game :c !';

        }
    }

    else if (guess < secretnumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;

        }

        else {
            document.querySelector('.message').textContent = 'You Lost the game :c !';

        }



    }
})


restarGame();

