'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const player2El = document.querySelector('.player--2');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const score2El = document.getElementById('score--2');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const current2El = document.getElementById('current--2');
const playerName0El = document.querySelector('#name--0');
const playerName1El = document.querySelector('#name--1');
const playerName2El = document.querySelector('#name--2');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const winner0E1 = document.querySelector('#winner--0');
const winner1E1 = document.querySelector('#winner--1');
const winner2E1 = document.querySelector('#winner--2');

let scores, currentScore, activePlayer, playing;

const name1 = prompt('Enter Name of Player-1');
playerName0El.textContent = name1;
const name2 = prompt('Enter Name of Player-2');
playerName1El.textContent = name2;
const name3 = prompt('Enter Name of Player-3');
playerName2El.textContent = name3;

// Starting conditions
const init = function () {
  scores = [0, 0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  score2El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  current2El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player2El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player2El.classList.remove('player--active');
  winner0E1.classList.add('hidden');
  winner1E1.classList.add('hidden');
  winner2E1.classList.add('hidden');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  if (activePlayer === 0) {
    activePlayer = 1;
    player0El.classList.remove('player--active');
    player1El.classList.add('player--active');
    player2El.classList.remove('player--active');
  } else if (activePlayer === 1) {
    activePlayer = 2;
    player0El.classList.remove('player--active');
    player1El.classList.remove('player--active');
    player2El.classList.add('player--active');
  } else if (activePlayer === 2) {
    activePlayer = 0;
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    player2El.classList.remove('player--active');
  }
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      if (activePlayer === 0) {
        winner0E1.classList.remove('hidden');
      } else if (activePlayer === 1) {
        winner1E1.classList.remove('hidden');
      } else if (activePlayer === 2) {
        winner2E1.classList.remove('hidden');
      }
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
