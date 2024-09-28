"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBoard = void 0;
var GameBoard = /** @class */ (function () {
    function GameBoard(gameArr) {
        this.gameArr = [];
        this.gameArr = gameArr;
        this.gameBoard = document.getElementById('game-board');
        this.createGameBoard();
    }
    GameBoard.prototype.createGameBoard = function () {
        console.log('create');
        var boxRow = document.createElement('ul');
        boxRow.className = 'boxrow';
        for (var i = 0; i < this.gameArr.length; i++) {
            var box = document.createElement('div');
            box.className = 'boxes';
            boxRow.appendChild(box);
        }
        this.gameBoard.appendChild(boxRow);
        var message = document.createElement('p');
        message.textContent = 'Start Game';
        this.gameBoard.appendChild(message);
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;
