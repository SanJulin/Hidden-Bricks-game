"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Theme_1 = require("./Theme");
/**
 * Class that represents the computer row with items that the Computer is creating.
 */
var ComputerRow = /** @class */ (function () {
    function ComputerRow(numberOfItems, themeDecription) {
        this.numberOfItems = 0;
        this.computerRow = [];
        this.themeArray = [];
        this.setNumberOfItems(numberOfItems);
        this.getThemeArray(themeDecription);
    }
    /**
     * Gets the number of items that is included in the computer row.
     *
     * @returns { number } - number of items included in the computer row.
     */
    ComputerRow.prototype.getNumberOfItems = function () {
        if (this.numberOfItems === null) {
            throw new Error('Number of items has not been set for the game');
        }
        return this.numberOfItems;
    };
    /**
     * Sets the number of items that should be included in the computer row.
     *
     * @param numberOfItems { number } - number of items that should be included in the computer row.
     */
    ComputerRow.prototype.setNumberOfItems = function (numberOfItems) {
        if (numberOfItems < 1 || numberOfItems > 8) {
            throw new Error('Pls provide a number between 1 - 8');
        }
        else {
            this.numberOfItems = numberOfItems;
        }
    };
    /**
     * Sets the itemArray if there are 8 items in the provided array.
     *
     * @param themeArray object [] - the array with themed items chosen for the game.
     */
    ComputerRow.prototype.getThemeArray = function (themeDecription) {
        var theme = new Theme_1.default(themeDecription);
        this.themeArray = theme.getThemeArray();
    };
    /**
     * Creates a random row based on the itemArray and returns it to the computer.
     *
     * @returns {string [] } - A row with items.
     */
    ComputerRow.prototype.generateRow = function () {
        var rowLength = this.numberOfItems;
        for (var i = 0; i < rowLength; i++) {
            var nextItemIndex = Math.floor(Math.random() * this.themeArray.length);
            var themeItem = this.themeArray[nextItemIndex];
            this.computerRow.push(themeItem);
        }
        return this.computerRow;
    };
    return ComputerRow;
}());
exports.default = ComputerRow;
