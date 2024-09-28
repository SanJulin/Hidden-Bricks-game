"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
require("./style.css");
var game_board_1 = require("./game-board");
var Game = /** @class */ (function () {
    function Game() {
        var gameBoard = new game_board_1.GameBoard(['sweden', 'japan', 'italy', 'norway', 'germany', 'china', 'usa', 'uk']);
        console.log(gameBoard);
    }
    return Game;
}());
exports.Game = Game;
