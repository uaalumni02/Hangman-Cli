
var Letter = require("./letter.js");


function hangMan(inputwrd) {
    this.guess = [];
    this.answerWord = inputwrd.toLowerCase().split("");
    this.guessedCorrect = false;
    this.isGuessed = function () {
        var currAnswer=[]
        for(var i=0; i<this.answerWord.length;i++){
            currAnswer.push(this.guess[i].returnCorrect())
        }
        if(currAnswer.join("").toLowerCase()===this.answerWord.join("").toLowerCase()){
            this.guessedCorrect=true;
        }
        return this.guessedCorrect;
    };
    this.displayWord = function () {
        var final=[]
        for(var letter in this.guess){
            final.push(this.guess[letter].returnCorrect())
        }
        console.log(final.join(" "));
    }
    this.generateGuessWord = function () {
        for (var i=0; i < this.answerWord.length; i++) {
            this.guess.push(new Letter(this.answerWord[i].toLowerCase()));
        }
    }
    this.checkLetters = function (toCheckLetter) {
        var changed=false;
        for (var i=0; i < this.answerWord.length; i++) {
            if (toCheckLetter.toLowerCase() === this.guess[i].secretValue){
                this.guess[i].correct=true;
                changed=true;
            }
        }
        return changed;
    }
}

module.exports = hangMan;
