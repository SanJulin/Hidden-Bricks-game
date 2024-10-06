"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that represents the game board.
 */
var GameBoard = /** @class */ (function () {
    function GameBoard(numberOfSigns, gameArr) {
        this.numberOfSigns = 5;
        this.gameArr = [];
        this.gameBoard = '';
        this.numberOfSigns = numberOfSigns;
        this.gameArr = gameArr;
        this.gameBoard = document.getElementById('game-board');
        this.createGameBoard();
    }
    GameBoard.prototype.createGameBoard = function () {
        console.log('create');
        var playerRow = document.getElementById('player-row');
        if (playerRow) {
            for (var i = 0; i < this.numberOfSigns; i++) {
                var playerGuess = document.createElement('div');
                playerGuess.className = 'player-guess';
                playerRow.appendChild(playerGuess);
            }
        }
        this.gameBoard.appendChild(playerRow);
        var optionRow = document.getElementById('option-row');
        if (optionRow) {
            for (var i = 0; i < this.gameArr.length; i++) {
                var option = document.createElement('div');
                option.className = 'option';
                var img = document.createElement('img');
                img.setAttribute('src', "/img/flags/".concat(i, ".webp"));
                img.setAttribute('alt', "".concat(this.gameArr[i]));
                option.appendChild(img);
                optionRow.appendChild(option);
            }
            this.gameBoard.appendChild(optionRow);
        }
        var message = document.createElement('p');
        message.textContent = 'Start Game';
        this.gameBoard.appendChild(message);
    };
    return GameBoard;
}());
exports.default = GameBoard;
