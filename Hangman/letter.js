var characters = /[a-z]|[0-9]/i;

function Choices(givenChar) {
    this.display = "_";
    this.secretValue = givenChar;
    this.correct = false;
    this.returnCorrect = function() {
        if (this.correct) {
            return this.secretValue;
        } else if (!characters.test(this.secretValue)) {
            return this.secretValue;
        } else {
            return this.display;
        }
    }
}

module.exports = Choices;