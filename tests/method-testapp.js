"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var computer_1 = require("../src/computer");
var computer_row_1 = require("../src/computer-row");
var item_1 = require("../src/item");
var theme_1 = require("../src/theme");
/**
 * Automatic testing of separate methods in the classes.
 * Pls enter node method-testapp.js to run the below tests. More test documentation is available in the tests folder.
 */
/**
 * Testing of the Computer class
 */
console.log('\n\nTests for the Computer class:');
// Creates an instance of the computer class with 3 as numberOfItems and an array with items belonging to the chosen theme
var computer = new computer_1.default(3, [{ name: 'police' }, { name: 'doctor' }, { name: 'pilot' }, { name: 'developer' }, { name: 'teacher' }, { name: 'administrator' }, { name: 'actor' }, { name: 'chef' }]);
console.log('\nconst Computer = new Computer(3, [{police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef}])');
// Sets the number of items to 4 - the computerRow will instead contains 4 items
computer.setNumberOfItems(4);
console.log('\ncomputer.setNumberOfItems(4)');
// Gets the number of items that should be used in the game
console.log("\ncomputer.getNumberOfItems()  -    result: ".concat(computer.getNumberOfItems()));
// Gets the computerRow. Should only be visible for the developer and never for the player
console.log("\ncomputer.getComputerRow()  -    \nresult: ".concat(JSON.stringify(computer.getComputerRow())));
// Send the players guess to the computer. The computer compares the row of items to the computerRow and sends back a result/feedback
var result = computer.checkAnswer([{ name: 'police' }, { name: 'pilot' }, { name: 'developer' }]);
console.log("\ncomputer.checkAnswer(['police', 'pilot', 'developer'])  -    \nresult: ".concat(result));
// Gets the number of guesses used so far in the game
var guesses = computer.getNumberOfGuesses();
console.log("\ncomputer.getNumberOfGuesses()  -    \nresult: ".concat(guesses, "\n"));
/**
 * Testing of the ComputerRow class
 */
console.log('\n\nTests for the ComputerRow class:');
// Creates an instance of the ComputerRow class with 5 as numberOfItems and an array with items belonging to the chosen theme
var computerRow = new computer_row_1.default(5, [{ name: 'police' }, { name: 'doctor' }, { name: 'pilot' }, { name: 'developer' }, { name: 'teacher' }, { name: 'administrator' }, { name: 'actor' }, { name: 'chef' }]);
console.log('\nconst ComputerRow = new ComputerRow(5, [police', 'doctor', 'pilot', 'developer', 'teacher', 'administrator', 'actor', 'chef])');
// Gets the number of items used in the computerRow
console.log("\ncomputerRow.getNumberOfItems()  -    result: ".concat(computerRow.getNumberOfItems()));
// Generates a new computer row with items
console.log("\ncomputerRow.generateRow()  -    result: ".concat(JSON.stringify(computerRow.generateRow()), "n"));
/**
 * Testing of the Theme class:
 */
console.log('\n\nTests for the Theme class:');
// Creates an instance of the Theme class with no parameter since the user would like to se the available themes first
console.log('\nconst theme = new Theme()');
var theme = new theme_1.default();
// Gets the available themes included in the model
console.log("\ntheme.getAvailableThemes() -    result: ".concat(theme.getAvailableThemes()));
// Sets the theme to animals
theme.setTheme('animals');
console.log('\ntheme.setTheme(animals)');
// Gets the chosen theme
console.log("\ntheme.getTheme() -      result: ".concat(theme.getTheme()));
// Gets and array with 8 items belonging to the chosen array
console.log("\ntheme.getItemArray() -      result: ".concat(JSON.stringify(theme.getItemArray())));
// Sets a different theme by sending in sports as theme and an array with 8 item belonging to the theme. The developer of the UI decides what should be included.   
theme.setOtherTheme('sports', [{ name: 'diving' }, { name: 'running' }, { name: 'playing tennis' }, { name: 'skiing' }, { name: 'sailing' }, { name: 'skating' }, { name: 'fitness' }, { name: 'dancing' }]);
console.log('\ntheme.setOtherTheme([diving', 'running', 'tennis playing', 'skiing', 'sailing', 'skating', 'fitness', 'dancing])');
// Gets a new array with 8 items belonging to the theme
console.log("\ntheme.getItemArray() -      result: ".concat(JSON.stringify(theme.getItemArray()), "\n"));
/**
 * Testing of the Item class
 */
console.log('\n\nTests for the Item class:');
// Creates an instance of the Item class with 3 as id and gorilla as name
console.log('\nconst item = new Item(gorilla, 3)');
var item = new item_1.default(3, 'gorilla');
// Gets the item name
var itemName = item.getName();
console.log("\nitem.getname -    result: ".concat(itemName));
// Gets the item id
var itemId = item.getId();
console.log("\nitem.getId -      result: ".concat(itemId));
// Sets the color of the item to yellow
item.setColor('yellow');
console.log('\nitem.setColor(yellow)');
// Gets the item color
var itemColor = item.getColor();
console.log("\nitem.getColor() -  result: ".concat(itemColor, "\n"));
