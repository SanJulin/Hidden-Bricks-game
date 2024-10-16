"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Theme_ts_1 = require("./Theme.ts");
/**
 * Class that represents the game board.
 */
var GameBoard = /** @class */ (function () {
    function GameBoard(numberOfItems, theme) {
        this.numberOfItems = 5;
        this.gameArray = [];
        this.gameBoard = '';
        this.numberOfItems = numberOfItems;
        this.theme = theme;
        this.gameBoard = document.getElementById('game-board');
        this.dragstartHandler = this.dragstartHandler.bind(this);
        this.dragoverHandler = this.dragoverHandler.bind(this);
        this.dropHandler = this.dropHandler.bind(this);
        this.gameArray = this.getGameArray();
        this.createGameBoard();
    }
    GameBoard.prototype.getGameArray = function () {
        var theme = new Theme_ts_1.default(this.theme);
        var themeArray = theme.getItemArray();
        return themeArray;
    };
    GameBoard.prototype.createGameBoard = function () {
        var _this = this;
        this.playerGuessRow = document.getElementById('player-guess-row');
        if (this.playerGuessRow) {
            for (var i = 0; i < this.numberOfItems; i++) {
                var playerGuessBox = document.createElement('div');
                playerGuessBox.className = 'guess';
                playerGuessBox.id = "guess".concat(i + 1);
                playerGuessBox.addEventListener('dragover', this.dragoverHandler);
                playerGuessBox.addEventListener('drop', this.dropHandler);
                this.playerGuessRow.appendChild(playerGuessBox);
            }
        }
        var clearAllButton = document.createElement('button');
        clearAllButton.textContent = 'Clear all';
        clearAllButton.addEventListener('click', function (event) {
            event.preventDefault();
            _this.clearAllGuesses();
        });
        var clearWrongGuessesButton = document.createElement('button');
        clearWrongGuessesButton.textContent = 'Clear wrong guesses';
        clearWrongGuessesButton.addEventListener('click', function (event) {
            event.preventDefault();
            _this.clearWrongGuesses();
        });
        this.playerGuessRow.appendChild(clearAllButton);
        this.playerGuessRow.appendChild(clearWrongGuessesButton);
        this.gameBoard.appendChild(this.playerGuessRow);
        this.optionRow = document.getElementById('option-row');
        if (this.optionRow) {
            for (var i = 0; i < this.gameArray.length; i++) {
                var option = document.createElement("div");
                option.className = 'option';
                option.id = "option".concat(i + 1);
                option.textContent = this.gameArray[i].getName();
                var img = document.createElement('img');
                img.setAttribute('src', "../img/".concat(this.theme, "/").concat((this.gameArray[i].getName()), ".jpg"));
                img.setAttribute('alt', "".concat(this.gameArray[i].getName()));
                option.appendChild(img);
                option.setAttribute('draggable', 'true');
                option.addEventListener('dragstart', this.dragstartHandler);
                this.optionRow.appendChild(option);
            }
        }
        this.gameBoard.appendChild(this.optionRow);
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
        if (droppedElementCopy && event.target instanceof HTMLElement) {
            event.target.appendChild(droppedElementCopy);
        }
    };
    GameBoard.prototype.clearAllGuesses = function () {
        for (var i = 0; i < this.playerGuessRow.children.length; i++) {
            if (this.playerGuessRow.children[i].firstElementChild !== null) {
                var child = this.playerGuessRow.children[i].firstElementChild;
                this.playerGuessRow.children[i].removeChild(child);
                this.playerGuessRow.children[i].style.border = '3px solid black';
            }
        }
    };
    GameBoard.prototype.clearWrongGuesses = function () {
        for (var i = 0; i < this.playerGuessRow.children.length; i++) {
            if (this.playerGuessRow.children[i].firstElementChild !== null && this.playerGuessRow.children[i].style.borderColor !== 'green') {
                var child = this.playerGuessRow.children[i].firstElementChild;
                this.playerGuessRow.children[i].removeChild(child);
                this.playerGuessRow.children[i].style.border = '3px solid black';
            }
        }
    };
    GameBoard.prototype.getPlayerAnswer = function () {
        var answerArray = [];
        for (var i = 0; i < this.playerGuessRow.children.length; i++) {
            if (this.playerGuessRow.children[i].firstElementChild !== null) {
                var answer = this.playerGuessRow.children[i].firstElementChild.textContent;
                answerArray.push(answer);
            }
        }
        return answerArray;
    };
    GameBoard.prototype.updateBorderColors = function (result) {
        for (var i = 0; i < result.length; i++) {
            var color = result[i].getColor();
            this.playerGuessRow.children[i].style.border = '10px solid ' + color;
        }
    };
    return GameBoard;
}());
exports.default = GameBoard;
