"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_1 = require("../src/computer");
var theme_1 = require("../src/theme");
/**
 * Automatic test program that shows how it could look like when the AI player plays against the computer.
 */
// Creates a new Theme
var theme = new theme_1.default();
// Gets the available themes
var themes = theme.getAvailableThemes();
// Generates a random theme based on the available themes.
var themeIndex = Math.floor(Math.random() * themes.length);
var randomTheme = themes[themeIndex];
// Sets a theme based on the random generated theme.
theme.setTheme(randomTheme);
// Gets the array with items that belongs to the theme.
var itemArray = theme.getItemArray();
// Generates a random number
var numberOfItems = Math.ceil(Math.random() * 8);
// Creates a computer opponent
var computer = new computer_1.default(numberOfItems, itemArray);
console.log(computer);
var gameContinues = true;
while (gameContinues === true) {
    for (var i = 0; i < itemArray.length; i++) {
        console.log("Item options: ".concat(JSON.stringify(itemArray[i])));
    }
    // Creates an array with the items that the AI has choosen.
    var answer = [];
    for (var i = 0; i < numberOfItems; i++) {
        var guessIndex = Math.floor(Math.random() * itemArray.length);
        var guess = itemArray[guessIndex];
        answer.push(guess);
    }
    console.log("Answer from user: ".concat(JSON.stringify(answer)));
    //Checks with the computer if the answer is correct.
    var result = computer.checkAnswer(answer);
    var parsedResult = JSON.parse(result);
    // Checks how many guesses the AI has used. 
    var numberOfGuesses = computer.getNumberOfGuesses();
    // Checks if the user has won and prints the resulttext and number of guesses needed if the user won. 
    // Prints the item + color. Green = correct place. Yellow = wrong place. Red = does not occur in the row.
    if (parsedResult === 'Congratulations! You made it!') {
        console.log("".concat(parsedResult, " Total number of guesses: ").concat(numberOfGuesses));
        gameContinues = false;
    }
    else {
        for (var i = 0; i < parsedResult.length; i++) {
            console.log(parsedResult[i]);
        }
    }
    // Ends the game if the AI has used 40 guesses.
    if (numberOfGuesses === 40) {
        console.log("You have unfortunately reached the maximum number of guesses. (".concat(numberOfGuesses, " guesses)"));
        gameContinues = false;
    }
}
