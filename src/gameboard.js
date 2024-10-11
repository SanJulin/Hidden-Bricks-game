"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that represents the game board.
 */
var GameBoard = /** @class */ (function () {
    function GameBoard(numberOfItems, gameArr) {
        this.numberOfItems = 5;
        this.gameBoard = '';
        this.numberOfItems = numberOfItems;
        this.gameArray = gameArr;
        this.gameBoard = document.getElementById('game-board');
        this.dragstartHandler = this.dragstartHandler.bind(this);
        this.dragoverHandler = this.dragoverHandler.bind(this);
        this.dropHandler = this.dropHandler.bind(this);
        this.createGameBoard();
    }
    GameBoard.prototype.createGameBoard = function () {
        var _this = this;
        console.log('create');
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
        var clearButton = document.createElement('button');
        clearButton.textContent = 'clear all';
        clearButton.addEventListener('click', function (event) {
            event.preventDefault();
            _this.clearPlayerGuesses();
        });
        this.playerGuessRow.appendChild(clearButton);
        this.gameBoard.appendChild(this.playerGuessRow);
        var optionRow = document.getElementById('option-row');
        if (optionRow) {
            for (var i = 0; i < this.gameArray.length; i++) {
                var option = document.getElementById("option".concat(i + 1));
                if (option) {
                    option.textContent = this.gameArray[i].getName();
                    var img = document.createElement('img');
                    img.setAttribute('src', "../img/flags/".concat((this.gameArray[i].getName()), ".webp"));
                    img.setAttribute('alt', "".concat(this.gameArray[i].getName()));
                    option.appendChild(img);
                    option.addEventListener('dragstart', this.dragstartHandler);
                }
            }
        }
        this.gameBoard.appendChild(optionRow);
        var message = document.createElement('p');
        message.textContent = "Guess which ".concat(this.numberOfItems, " items that should be in the computer row by dropping the pictures in the above row and click on check answer!");
        this.gameBoard.appendChild(message);
    };
    GameBoard.prototype.updatePlayerGuessItem = function (playerGuessItem, chosen) {
        var chosenItem = chosen;
        playerGuessItem.appendChild(chosenItem);
        console.log('added');
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
            console.log('dropped');
        }
    };
    GameBoard.prototype.clearPlayerGuesses = function () {
        for (var i = 0; i < this.playerGuessRow.children.length; i++) {
            if (this.playerGuessRow.children[i].firstElementChild !== null) {
                var child = this.playerGuessRow.children[i].firstElementChild;
                console.log(child);
                this.playerGuessRow.children[i].removeChild(child);
            }
        }
    };
    GameBoard.prototype.getPlayerAnswer = function () {
        var answerArray = [];
        for (var i = 0; i < this.playerGuessRow.children.length; i++) {
            if (this.playerGuessRow.children[i].firstElementChild !== null) {
                var answer = this.playerGuessRow.children[i].firstElementChild.textContent;
                console.log("answer ".concat(answer));
                answerArray.push(answer);
            }
        }
        console.log(answerArray);
        return answerArray;
    };
    return GameBoard;
}());
exports.default = GameBoard;
