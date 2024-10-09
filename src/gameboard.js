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
        this.createGameBoard();
    }
    GameBoard.prototype.createGameBoard = function () {
        var _this = this;
        console.log('create');
        var playerRow = document.getElementById('player-row');
        if (playerRow) {
            for (var i = 0; i < this.numberOfItems; i++) {
                var playerGuessItem = document.createElement('div');
                playerGuessItem.className = 'player-guess';
                playerRow.appendChild(playerGuessItem);
                playerGuessItem.addEventListener('drop', function (event) {
                    event.preventDefault();
                    var chosenItem = event.detail;
                    _this.addPlayerGuessItem(chosenItem);
                });
            }
            this.gameBoard.appendChild(playerRow);
            var optionRow = document.getElementById('option-row');
            if (optionRow) {
                for (var i = 0; i < this.gameArray.length; i++) {
                    var option = document.createElement('div');
                    option.className = 'option';
                    option.textContent = this.gameArray[i].getName();
                    var img = document.createElement('img');
                    img.setAttribute('src', "../img/flags/".concat((this.gameArray[i].getName()), ".webp"));
                    img.setAttribute('alt', "".concat(this.gameArray[i].getName()));
                    option.appendChild(img);
                    optionRow.appendChild(option);
                }
                this.gameBoard.appendChild(optionRow);
            }
            var message = document.createElement('p');
            message.textContent = "Guess which ".concat(this.numberOfItems, " items that should be in the computer row by dropping the pictures in the computer row and click on check answer!");
            this.gameBoard.appendChild(message);
        }
    };
    GameBoard.prototype.addPlayerGuessItem = function (chosen) {
        var chosenItem = chosen;
        console.log('added');
    };
    return GameBoard;
}());
exports.default = GameBoard;
