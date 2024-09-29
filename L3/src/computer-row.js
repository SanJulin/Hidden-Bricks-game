"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerRow = void 0;
var ComputerRow = /** @class */ (function () {
    function ComputerRow(numberOfCharacters, themeArr) {
        this.numberOfCharacters = numberOfCharacters;
        this.themeArr = themeArr;
    }
    ComputerRow.prototype.generateRow = function () {
        var rowLength = this.numberOfCharacters;
        var newRow = [];
        for (var i = 0; i < rowLength; i++) {
            var nextColorIndex = Math.floor(Math.random() * this.themeArr.length);
            var nextColor = this.themeArr[nextColorIndex];
            newRow.push(nextColor);
        }
        return newRow;
    };
    return ComputerRow;
}());
exports.ComputerRow = ComputerRow;
