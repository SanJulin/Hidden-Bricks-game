"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
var Theme = /** @class */ (function () {
    function Theme(theme) {
        this.theme = 'animals';
        this.colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black', 'white', 'purple'];
        this.animals = ['tiger', 'elefant', 'gorilla', 'whale', 'giraff', 'zebra', 'bear', 'crocodile'];
        this.flags = ['sweden', 'japan', 'italy', 'norway', 'kenya', 'china', 'brazil', 'uk'];
        this.arr = [];
        this.setTheme(theme);
    }
    Theme.prototype.getTheme = function () {
        return this.theme;
    };
    Theme.prototype.setTheme = function (theme) {
        this.theme = theme;
        this.setArr();
    };
    Theme.prototype.getArr = function () {
        return this.arr;
    };
    Theme.prototype.setArr = function () {
        if (this.theme === 'animals') {
            this.arr = this.animals;
        }
        if (this.theme === 'colors') {
            this.arr = this.colors;
        }
        if (this.theme === 'flags') {
            this.arr = this.flags;
        }
        else {
            this.arr = this.animals;
        }
    };
    return Theme;
}());
exports.Theme = Theme;
