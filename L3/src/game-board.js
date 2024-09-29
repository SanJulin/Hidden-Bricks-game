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
        for (var i = 0; i < this.gameArr.length; i++) {
            var box = document.createElement('div');
            box.textContent = 'box';
            box.className = 'boxes';
            this.gameBoard.appendChild(box);
        }
        var message = document.createElement('p');
        message.textContent = 'Start Game';
        this.gameBoard.appendChild(message);
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;
