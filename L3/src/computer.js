"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
var computer_row_1 = require("./computer-row");
var Computer = /** @class */ (function () {
    function Computer(numberOfSigns, themeArr) {
        if (numberOfSigns === void 0) { numberOfSigns = 5; }
        this.computerRow = [];
        this.answerWithFeedback = [];
        this.numberOfSigns = numberOfSigns;
        this.computerRow = this.createComputerRow(themeArr);
    }
    Computer.prototype.createComputerRow = function (themeArr) {
        var computerRow = new computer_row_1.ComputerRow(this.numberOfSigns, themeArr);
        return computerRow.generateRow();
    };
    Computer.prototype.checkAnswer = function (answer) {
        var answerFromPlayer = answer;
        console.log("Answer from player: ".concat(answerFromPlayer));
        var correctSigns = 0;
        var result;
        var signObject = { sign: String, comment: String };
        for (var i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i] === this.computerRow[i]) {
                correctSigns++;
                signObject = { sign: answerFromPlayer[i], comment: 'correct place' };
            }
            else if (answerFromPlayer[i] !== this.computerRow[i] && this.computerRow.includes(answerFromPlayer[i])) {
                signObject = { sign: answerFromPlayer[i], comment: 'available, but in the wrong place' };
            }
            else {
                signObject = { sign: answerFromPlayer[i], comment: 'not available in the row' };
            }
            this.answerWithFeedback.push(signObject);
        }
        if (correctSigns === this.numberOfSigns) {
            result = 'Congratulations! You won! All the signs are in the correct place';
        }
        else {
            result = this.answerWithFeedback;
        }
        return result;
    };
    return Computer;
}());
exports.Computer = Computer;
