'use strict';
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number'
console.log(document.querySelector('.message').textContent);

document.querySelector('.').textContent = 14
document.querySelector('.score').textContent = 23
document.querySelector('.guess').value = 45 */
let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0
const winColor = '#60b347'
const winWidth = '30rem'
const defaultColor = '#222'
const defaultWidth = '15rem'
//console.log('secret number::', secretNumber);

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    let highScore = Number(document.querySelector('.highscore').value)
    //console.log(guess);
    document.querySelector('body').style.backgroundColor = defaultColor
    document.querySelector('.number').style.width = defaultWidth
    //Number(document.querySelector('.score').textContent)
    if (!guess || guess < 1 || guess > 19) {
        document.querySelector('.message').textContent = '⛔ Enter numbers between 1 and 20'
    } else if (guess === secretNumber) {
        highScore = Math.max(score, Number(document.querySelector('.highscore').textContent))
        document.querySelector('.highscore').textContent = highScore
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('.message').textContent = '🎉 Correct number!'
        document.querySelector('body').style.backgroundColor = winColor
        document.querySelector('.number').style.width = winWidth
    } else if (guess > secretNumber && score > 0) {
        document.querySelector('.message').textContent = '📈 too high!'
        score--
        console.log(score);
        document.querySelector('.score').textContent = score
    } else if (guess < secretNumber && score > 0) {
        document.querySelector('.message').textContent = '📉 too low!'
        score--
        console.log(score);
        document.querySelector('.score').textContent = score
    }
    if (score < 1) {
        document.querySelector('.message').textContent = '😿 you lost!'
        document.querySelector('.score').textContent = 0
    }
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    //const prevScore = Number(document.querySelector('.score').textContent)
    //highScore = Math.max(prevScore, highScore)
    score = 20

    // console.log('secret number::', secretNumber);
    document.querySelector('.guess').value = ''
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    //document.querySelector('.highscore').textContent = highScore
    document.querySelector('.number').textContent = '?'
    if (document.querySelector('body').style.backgroundColor !== defaultColor) {
        document.querySelector('body').style.backgroundColor = defaultColor
    }
    if (document.querySelector('.number').style.width !== defaultWidth) {
        document.querySelector('.number').style.width = defaultWidth
    }


})