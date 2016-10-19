// export to use in word.js
exports.Letter = function(character) { // constructor function that takes a creates a character object
  this.letter = character; // property to store the actual letter
  this.show = false; // property/boolean if the letter can be shown
	this.letterRender = function() { // sets the output value
    if (this.show) { //if appear is true then show character
      this.output = this.letter;
    } else { //else appear is false then show the -
      this.output = "-";
    }
	};
};



