var inquirer = require('inquirer');
var Game = require('./game.js');
var game = new Game();

function startHangman() {

    game.startNewGame();

    game.word.displayWord();

    promptAndProcessInput();
}

function promptAndProcessInput() {
    inquirer.prompt([{
        type: "input",
        name: "userGuess",
        message: "Select a letter (letters a-z)",
        validate: function(value) {
            var validInputs = /[a-z]|[0-9]/i;
            if (value.length === 1 && validInputs.test(value)) {
                if (game.lettersGuessed.length > 0) {
                    for (var items in game.lettersGuessed) {
                        if (value.toLowerCase() === game.lettersGuessed[items]) {
                            return "This letter has already been picked.\nPlease pick another letter (letters a-z):"
                        }
                    }
                }
                return true;
            }

            return "Pick a letter a-z:"
        }
    }]).then(function(answer) {
        game.lettersGuessed.push(answer.userGuess);
        if (game.word.checkLetters(answer.userGuess)) {
            game.word.displayWord();
            if (game.word.isGuessed()) {
                winGame();
            } else {
                promptAndProcessInput();
            }
        } else {
            game.guessRemaining--;
            console.log("Guesses Remaining: " + game.guessRemaining);
            game.word.displayWord();
            if (game.guessRemaining <= 0) {
                loseGame();
            } else {
                promptAndProcessInput();
            }
        }

    })
}

function winGame() {
    game.wins++;
    console.log("You won! Your current record is: " + game.wins + " wins and: " + game.losses + " losses");

    playAgainPrompt();
}

function loseGame() {
    game.losses++;
    console.log("Didnt win and your score is: " + game.wins + " wins and: " + game.losses + " losses");
    console.log("The word was actually: " + game.word.answerWord.join(''))
    playAgainPrompt();
}

function playAgainPrompt() {
    inquirer.prompt([{
        type: 'confirm',
        name: 'playAgain',
        message: 'Do you want to give it another shot?',
    }]).then(function(answer) {
        if (answer.playAgain) {
            startHangman();
        } else {
            console.log("See ya next time");
            return;
        }
    });
}
startHangman();