
var Word= require('./word.js');

var wordBank=["cardinals", "ravens", "panthers", "bengals", "cowboys", "lions", "texans", "jaguars", "dolphins", "patriots", "giants", "raiders", "steelers", "rams", "titans", "falcons", "bills", "bears", "browns", "broncos", "packers", "colts", "chiefs", "vikings", "saints", "jets", "eagles", "chargers", "seahawks", "buccaneers", "redskins"];

function NFL() {
	this.wins=0;
	this.losses=0;
	this.guessRemaining=0;
	this.lettersGuessed = [];
	this.word=null;
	this.startNewGame =function(){
		this.guessRemaining=10;
		this.lettersGuessed=[];
		this.word=this.generateRandWord();
		console.log("NFL Hangman Lets Gooooooo!");
	};
	this.generateRandWord=function () {
		var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];
		var newWord= new Word(randWord);
		newWord.generateGuessWord();
		return newWord;
	};
};

module.exports = NFL;