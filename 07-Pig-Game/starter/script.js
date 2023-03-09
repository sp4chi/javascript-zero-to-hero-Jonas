'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.querySelector('#score--0')
const score1El = document.getElementById('score--1')
const currentPlayer0El = document.getElementById('current--0')
const currentPlayer1El = document.getElementById('current--1')


const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

//start conditions
score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add('hidden')

const score = [0, 0]
let currentScore = 0
let activePlayer = 0
let playing = true

//switch function
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    // score[activePlayer] += currentScore
    // document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
    currentScore = 0
    activePlayer = (activePlayer === 0) ? 1 : 0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}


//rolling dice functionality
btnRoll.addEventListener('click', function () {

    if (playing) {
        //1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1
        //console.log(dice);
        //2. Display
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`

        //3.Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        } else {
            //Switch to new player
            switchPlayer()
        }
    }
})


//hold button functionality
btnHold.addEventListener('click', function () {
    if (playing) {
        //1. Add current score to active player's score
        score[activePlayer] += currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer]
        //2.Check if player score is >= 100, if true finish game
        if (score[activePlayer] >= 20) {
            //finish the game
            playing = false
            //Current player wins

            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`)
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`)
            diceEl.classList.add('hidden')

            //2. 
        } else {
            //3.Else switch to next player
            switchPlayer()
        }
    }
})

//new-game button functionality
btnNew.addEventListener('click', function () {
    score0El.textContent = 0
    score1El.textContent = 0
    diceEl.classList.add('hidden')

    score[0] = 0;
    score[1] = 0
    currentScore = 0
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
    document.querySelector(`.player--0`).classList.add(`player--active`)
    document.querySelector(`.player--1`).classList.remove(`player--active`)
    activePlayer = 0
    playing = true
    document.querySelector(`#current--0`).textContent = 0
    document.querySelector(`#current--1`).textContent = 0
})


