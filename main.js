var prompt = require('prompt');
var Word = require('./word.js');
var Bank = require('./bank.js');

prompt.start();

var game = {
	wordBank : Bank,
	guessArray : [],
	guessesRemaining : 5,
	currentWord : null,
	// function to begin the game
	startGame : function (word) {
		// generate current word from word bank
		var i = Math.floor(Math.random() * this.wordBank.length);
		this.currentWord = new Word(this.wordBank[i]);
		// get the letters for the current word
		this.currentWord.getLetters();
		// prompt user for letter guess
		this.promptUser();
	},
	promptUser : function() {
		// create nested 'this' by declaring it as 'that'
		var that = this;
		prompt.get(['guess'], function(err, result) {
			// transform to uppercase
			var guess = result.guess.toUpperCase();
			// add guess to array of guessed words
			that.guessArray.push(guess);
			// sort alphabetically for human readability
			that.guessArray.sort();
			// log guess to user
	    console.log('Your guess was "' + guess + '"');
			// changes display status for letter and return 'true' if guess is correct
	    var correctGuess = that.currentWord.letterStatus(guess);
			// logic to display if guess was correct to the user
	    if (correctGuess) {
				console.log('Correct Guess!');
				//check if you win only when you are right
				if (that.currentWord.returnIsGuessed()) {
					console.log('You Won!!!');
					return; //end game
				}
	    } else {
				console.log('Wrong guess!');
	    	that.guessesRemaining--; // decrement correct guess count
	    }
			// Return game information to user after guess
	    console.log('Guesses remaining: ' + that.guessesRemaining);
			console.log('Guessed Letters: ' + JSON.stringify(that.guessArray));
	    console.log(that.currentWord.render());
			// Logic to determine game status
	    if ((that.guessesRemaining > 0) && (that.currentWord.isGuessed == false)) {  // Play condition
				console.log('');
				that.promptUser();
	    }
	    else if (that.guessesRemaining == 0) {  // Loss condition
	    	console.log('GAME OVER! The word was "' + that.currentWord.word + '"');
	    } else {  // Win condition
				console.log('YOU WIN! The word was "' + that.currentWord.word + '"');
				return;
	    }
		});
	}
};

game.startGame();
