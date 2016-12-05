module.exports = function(letter) {
	this.letter = letter;
	this.isDisplayed = false;
	// renders the letter bassed on if it was guessed or not by the user
	this.render = function() {
		// default render
		var renderedChracter = " _ ";
		// if letter has been guessed
		if (this.isDisplayed) {
			// change rendering to the correct letter
			renderedChracter = this.letter;
		}
		return renderedChracter;
	};
};
