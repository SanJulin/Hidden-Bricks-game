"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var theme_1 = require("../src/theme");
var computer_1 = require("../src/computer");
/**
 * Testing app for playing against the computer.
 */
// Takes the input from the user.
var themeFromUser = readlineSync.question('Pls enter the theme you would like to play with? \n1. flags \n2. animals \n3. colors \n4. professions \n5. movies \n');
var theme;
// Checks which theme the input represents
if (themeFromUser === '1') {
    theme = 'flags';
}
else if (themeFromUser === '2') {
    theme = 'animals';
}
else if (themeFromUser === '3') {
    theme = 'colors';
}
else if (themeFromUser === '4') {
    theme = 'professions';
}
else if (themeFromUser === '5') {
    theme = 'movies';
}
else {
    console.log('Not a valid number');
}
// Creates a new Theme that sets the theme chosen by the user.
var gameTheme = new theme_1.default(theme);
// Takes the input from the user
var numberOfItems = readlineSync.question('How many items would you like to play with? (1-8) ');
// Creates an array with options with the theme set for the game.
var itemOptions = gameTheme.getItemArray();
//Creates a new computer opponent. 
var computer = new computer_1.default(numberOfItems, itemOptions);
//Prints the computer object to make it easier to check if the test result is correct. 
console.log(computer);
var gameContinues = true;
while (gameContinues === true) {
    // Writes out the options that the user can choose between
    console.log('\nYour options:');
    console.log(itemOptions);
    // Takes the input guessed by the user
    var answerInNumbers = readlineSync.question("Pls guess the content in the computer row. choose ".concat(numberOfItems, " (id) numbers to represent your row. "));
    var answer = [];
    // Creates an array with the items that the user has choosen.
    for (var i = 0; i < answerInNumbers.length; i++) {
        if (answerInNumbers[i] === '1') {
            answer.push(itemOptions[0]);
        }
        else if (answerInNumbers[i] === '2') {
            answer.push(itemOptions[1]);
        }
        else if (answerInNumbers[i] === '3') {
            answer.push(itemOptions[2]);
        }
        else if (answerInNumbers[i] === '4') {
            answer.push(itemOptions[3]);
        }
        else if (answerInNumbers[i] === '5') {
            answer.push(itemOptions[4]);
        }
        else if (answerInNumbers[i] === '6') {
            answer.push(itemOptions[5]);
        }
        else if (answerInNumbers[i] === '7') {
            answer.push(itemOptions[6]);
        }
        else if (answerInNumbers[i] === '8') {
            answer.push(itemOptions[7]);
        }
    }
    //Checks with the computer if the answer is correct.
    var result = computer.checkAnswer((answer));
    var parsedResult = JSON.parse(result);
    // Checks if the user has won and prints the resulttext and number of guesses needed if the user won. 
    // Prints the item + color. Green = correct place. Yellow = wrong place. Red = does not occur in the row.
    console.log('\nResult from Computer:');
    if (parsedResult === 'Congratulations! You made it!') {
        console.log(parsedResult);
        console.log("Total number of guesses: ".concat(computer.getNumberOfGuesses()));
        gameContinues = false;
    }
    else {
        for (var i = 0; i < parsedResult.length; i++) {
            console.log(parsedResult[i]);
        }
    }
}
