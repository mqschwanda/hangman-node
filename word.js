var Letter = require('./letter.js');

module.exports = function(word) {
	this.word = word;
	this.letterArray = [];
	this.isGuessed = false;
	// create letters from constructor function
	this.getLetters = function() {
		// for each letter in the word
		for (var i = 0; i < this.word.length; i++) {
			// use constructor function to create letter object
			this.letterArray.push(new Letter(this.word[i]));
		}
	};
	// determine if word is guessed and return true or false
	this.returnIsGuessed = function() {
		this.isGuessed = true; // flag word is guessed and change later if it is not guessed
		for (var i = 0; i < this.letterArray.length; i++) {
			if (!this.letterArray[i].isDisplayed) { // uses the letter display attribute to determine is the word is guessed
				this.isGuessed = false; // flag word as not guessed
				i = this.letterArray.length; // exit for loop
			}
		}
	};
	// check if a letter has been guessed or not
	this.letterStatus = function(guess) {
		// flag for correct guess
		var correctGuess = false;
		// for each letter in the current word
		for (var i = 0; i < this.letterArray.length; i++) {
			if (this.letterArray[i].letter == guess) { // if guess equals the letter
				this.letterArray[i].isDisplayed = true; // flag letter display as true
				correctGuess = true; // flag guess as correct
			}
		}
		return correctGuess;
	};
	// renders the word based on the correct guesses
	this.render = function() {
		var string = ''; // empty string
		for (var i = 0; i < this.letterArray.length; i++) { // for each leeter in the word
			string += this.letterArray[i].render(); // add each rendering of a letter to the string
		}
		return string;
	};
}
