"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item_ts_1 = require("./Item.ts");
/**
 * Class that represents the game board.
 */
var GameBoard = /** @class */ (function () {
    function GameBoard(numberOfItems, themeObject) {
        this.numberOfItems = 5;
        this.optionArray = [];
        this.numberOfItems = numberOfItems;
        this.theme = themeObject;
        this.optionArray = this.theme.getItemArray();
        this.playerGuessRow = document.getElementById('player-guess-row');
        this.optionRow = document.getElementById('option-row');
        this.dragstartHandler = this.dragstartHandler.bind(this);
        this.dragoverHandler = this.dragoverHandler.bind(this);
        this.dropHandler = this.dropHandler.bind(this);
        this.createGameBoard();
    }
    GameBoard.prototype.createGameBoard = function () {
        this.createPlayerGuessRow();
        this.createOptionRow();
        this.createClearAllButton();
        this.createClearWrongButton();
    };
    GameBoard.prototype.createPlayerGuessRow = function () {
        for (var i = 0; i < this.numberOfItems; i++) {
            var playerGuessBox = document.createElement('div');
            playerGuessBox.className = 'guess';
            playerGuessBox.id = "guess".concat(i + 1);
            playerGuessBox.addEventListener('dragover', this.dragoverHandler);
            playerGuessBox.addEventListener('drop', this.dropHandler);
            this.playerGuessRow.appendChild(playerGuessBox);
        }
    };
    GameBoard.prototype.createOptionRow = function () {
        for (var i = 0; i < this.optionArray.length; i++) {
            var option = document.createElement("div");
            option.className = 'option';
            option.id = "option".concat(this.optionArray[i].getId());
            option.textContent = this.optionArray[i].getName();
            var image = this.optionArray[i].getImage();
            if (image) {
                option.appendChild(image);
            }
            option.setAttribute('draggable', 'true');
            option.addEventListener('dragstart', this.dragstartHandler);
            this.optionRow.appendChild(option);
        }
    };
    GameBoard.prototype.createClearAllButton = function () {
        var _this = this;
        var clearAllButton = document.createElement('button');
        clearAllButton.textContent = 'clear all';
        clearAllButton.addEventListener('click', function (event) {
            event.preventDefault();
            var clearingType = 'all';
            _this.clearGuesses(clearingType);
        });
        this.playerGuessRow.appendChild(clearAllButton);
    };
    GameBoard.prototype.createClearWrongButton = function () {
        var _this = this;
        var clearWrongGuessesButton = document.createElement('button');
        clearWrongGuessesButton.textContent = 'clear wrong guesses';
        clearWrongGuessesButton.addEventListener('click', function (event) {
            event.preventDefault();
            var clearingType = 'wrong';
            _this.clearGuesses(clearingType);
        });
        this.playerGuessRow.appendChild(clearWrongGuessesButton);
    };
    GameBoard.prototype.updatePlayerGuessItem = function (playerGuessItem, chosen) {
        var chosenItem = chosen;
        playerGuessItem.appendChild(chosenItem);
    };
    GameBoard.prototype.dragstartHandler = function (event) {
        var _a;
        if (event.target instanceof HTMLElement) {
            (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/plain", event.target.id);
        }
    };
    GameBoard.prototype.dragoverHandler = function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
    };
    GameBoard.prototype.dropHandler = function (event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text/plain");
        var droppedElement = document.getElementById(data);
        var droppedElementCopy = droppedElement === null || droppedElement === void 0 ? void 0 : droppedElement.cloneNode(true);
        if (droppedElementCopy && event.target instanceof HTMLElement && event.target.children.length === 0) {
            event.target.appendChild(droppedElementCopy);
        }
    };
    GameBoard.prototype.clearGuesses = function (clearingType) {
        for (var i = 0; i < this.playerGuessRow.children.length; i++) {
            var element = this.playerGuessRow.children[i];
            var elementChild = this.playerGuessRow.children[i].firstElementChild;
            if (element && elementChild) {
                if (clearingType === 'wrong' && element.style.borderColor !== 'green') {
                    element.removeChild(elementChild);
                    element.style.border = '3px solid black';
                }
                else if (clearingType === 'all') {
                    element.removeChild(elementChild);
                    element.style.border = '3px solid black';
                }
            }
        }
    };
    GameBoard.prototype.getPlayerAnswer = function () {
        var _a;
        var answerArray = [];
        for (var i = 0; i < this.numberOfItems; i++) {
            var answer = (_a = this.playerGuessRow.children[i].firstElementChild) === null || _a === void 0 ? void 0 : _a.textContent;
            var item = new Item_ts_1.default(i, answer);
            answerArray.push(item);
        }
        return answerArray;
    };
    GameBoard.prototype.updateBorderColors = function (itemIndex, color) {
        var element = this.playerGuessRow.children[itemIndex];
        element.style.border = '10px solid ' + color;
    };
    return GameBoard;
}());
exports.default = GameBoard;
