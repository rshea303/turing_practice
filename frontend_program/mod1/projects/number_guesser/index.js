const guessBtn = document.querySelector('#guessBtn');
const guessInput = document.querySelector('#guessInput');
const clearBtn = document.querySelector('#clearBtn');
const guessResultField = document.querySelector('.guessResult');
const resetBtn = document.querySelector('#resetBtn');
const guessClue = document.querySelector('.guessClue');
let number;
let guess;

guessBtn.addEventListener('click', function() {
  guess = guessInput.value;
  if (validateInput(guess)) {
    removeGuess();
    clearInput();
    displayGuess(guess);
    removeGuessClue();
    checkAccuracy(guess);
  } else {
    showError();
  }

});

guessBtn.addEventListener('mouseenter', function(e) {
  if (guessInput.value) {
    this.classList.add('highlights');
  }
});

guessBtn.addEventListener('mouseleave', function(e) {
  this.classList.remove('highlights');
});

clearBtn.addEventListener('click', function() {
  clearInput();
});

clearBtn.addEventListener('mouseenter', function(e) {
  if (guessInput.value) {
    this.classList.add('highlights');
  }
});

clearBtn.addEventListener('mouseleave', function(e) {
  this.classList.remove('highlights');
});

resetBtn.addEventListener('click', function() {
  clearInput();
  removeGuess();
  removeGuessClue();
  generateNewNumber();
});

resetBtn.addEventListener('mouseover', function(e) {
  if (guessResultField.innerText) {
    this.classList.add('highlights');
  }
});

resetBtn.addEventListener('mouseleave', function() {
  this.classList.remove('highlights');
});

const validateInput = guess => {
  return parseInt(guess);
};


const displayGuess = guess => {
  guessResultField.append(guess);
};

const clearInput = () => {
  guessInput.value = '';
};

const removeGuess = () => {
  guessResultField.innerHTML ='';
};

const checkAccuracy = guess => {

  if (parseInt(guess) > number) {
    guessClue.append("That is too high!");
  } else if (parseInt(guess) < number) {
    guessClue.append("That is too low!");
  } else {
    guessClue.append("BOOM!");
  }
};

const removeGuessClue = () => {
  guessClue.innerHTML = '';
};

const generateNewNumber = () => {
  number = Math.floor(Math.random() * 100 + 1);
}

window.onload = generateNewNumber;

