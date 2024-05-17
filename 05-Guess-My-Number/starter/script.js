'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let gameOver = false;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    if (gameOver) return;
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess == secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = guess;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = '#60b347';
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = score;
        gameOver = true;
    } else if (guess != secretNumber) {
        if (score > 1) {
            if (guess > secretNumber) {
                displayMessage('📈 Too high!' );
            }
            if (guess < secretNumber) {
                displayMessage('📉 Too low!' );
            } 
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.highscore').textContent = score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
            
        }
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    gameOver = false;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
  