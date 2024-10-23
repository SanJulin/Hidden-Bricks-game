"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Theme_ts_1 = require("./Theme.ts");
var GameUi = /** @class */ (function () {
    function GameUi() {
        this.textMessage = document.getElementById('text-message');
        this.userMessageElement = document.getElementById('user-message-element');
        this.resultText = document.getElementById('result-element');
        this.numberOfGuessesElement = document.getElementById('number-of-guesses');
    }
    GameUi.prototype.getUsername = function () {
        var _this = this;
        return new Promise(function (resolve) {
            console.log(('in username'));
            var inputName = document.createElement('input');
            var startButton = document.createElement('button');
            startButton.textContent = 'Submit';
            _this.textMessage.textContent = 'Welcome! Enter your username and click on submit to begin!';
            _this.userMessageElement.appendChild(startButton);
            _this.userMessageElement.appendChild(inputName);
            startButton.addEventListener('click', function () {
                var username = inputName.value;
                _this.textMessage.textContent = '';
                inputName.style.display = 'none';
                startButton.removeEventListener;
                startButton.style.display = 'none';
                resolve(username);
            });
        });
    };
    GameUi.prototype.getChoosenTheme = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var theme = new Theme_ts_1.default();
            var availableThemes = theme.getAvailableThemes();
            _this.textMessage.textContent = 'Choose a theme for the game!';
            var themeButtons = [];
            var _loop_1 = function (i) {
                var themeButton = document.createElement('button');
                themeButton.textContent = "".concat(availableThemes[i]);
                themeButtons.push(themeButton);
                _this.userMessageElement.appendChild(themeButton);
                themeButton.addEventListener('click', function (event) {
                    var choosenTheme = themeButton.textContent;
                    for (var i_1 = 0; i_1 < themeButtons.length; i_1++) {
                        themeButtons[i_1].remove();
                    }
                    if (choosenTheme) {
                        resolve(choosenTheme);
                    }
                });
            };
            for (var i = 0; i < availableThemes.length; i++) {
                _loop_1(i);
            }
        });
    };
    GameUi.prototype.getNumberOfItems = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.textMessage.textContent = 'How many bricks would you like to play with? Choose a number between 2 and 8.';
            var numberOfItemsInput = document.createElement('input');
            _this.userMessageElement.appendChild(numberOfItemsInput);
            var submitNumberButton = document.createElement('button');
            submitNumberButton.textContent = 'start game';
            _this.userMessageElement.appendChild(submitNumberButton);
            submitNumberButton.addEventListener('click', function (event) {
                if (numberOfItemsInput.value) {
                    var numberOfItems = parseInt(numberOfItemsInput.value);
                    submitNumberButton.style.display = 'none';
                    numberOfItemsInput.style.display = 'none';
                    _this.textMessage.textContent = '';
                    resolve(numberOfItems);
                }
            });
        });
    };
    GameUi.prototype.showUserInstructions = function (numberOfItems) {
        this.textMessage.textContent = "Guess which ".concat(numberOfItems, " items that should be in the computer row by dropping the pictures in the above row and click on check answer!");
    };
    GameUi.prototype.showMessage = function (resultText) {
        this.resultText.textContent = resultText;
    };
    GameUi.prototype.showNumberOfGuesses = function (numberOfGuesses, username) {
        this.numberOfGuessesElement.textContent = "Player ".concat(username, " has guessed \n").concat(numberOfGuesses === null || numberOfGuesses === void 0 ? void 0 : numberOfGuesses.toString(), " times.");
    };
    return GameUi;
}());
exports.default = GameUi;
