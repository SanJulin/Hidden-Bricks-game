"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../css/styles.css");
var gameboard_ts_1 = require("./gameboard.ts");
var computer_ts_1 = require("./computer.ts");
var game_ui_ts_1 = require("./game-ui.ts");
var theme_ts_1 = require("./theme.ts");
/**
 * Class that represents the game.
 */
var Game = /** @class */ (function () {
    function Game() {
        this.themeDescription = '';
        this.gameUi = new game_ui_ts_1.default();
        this.themeObject = new theme_ts_1.default();
        this.answerButton = document.getElementById('answer-button');
        this.start();
    }
    Game.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, availableThemes, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.gameUi.getUsername()];
                    case 1:
                        _a.username = _d.sent();
                        availableThemes = this.themeObject.getAvailableThemes();
                        _b = this;
                        return [4 /*yield*/, this.gameUi.getChoosenTheme(availableThemes)];
                    case 2:
                        _b.themeDescription = _d.sent();
                        _c = this;
                        return [4 /*yield*/, this.gameUi.getNumberOfItems()];
                    case 3:
                        _c.numberOfItems = _d.sent();
                        this.createGame();
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.createGame = function () {
        if (this.numberOfItems && this.themeDescription) {
            this.themeObject.setTheme(this.themeDescription);
            this.computer = new computer_ts_1.default(this.numberOfItems, this.themeDescription);
            this.gameBoard = new gameboard_ts_1.default(this.numberOfItems, this.themeObject);
            this.gameUi.showUserInstructions(this.numberOfItems);
            this.addAnswerButton();
        }
    };
    Game.prototype.addAnswerButton = function () {
        var _this = this;
        this.answerButton.textContent = 'check answer';
        this.answerButton.style.display = 'block';
        this.answerButton.addEventListener('click', function (event) {
            _this.checkAnswer();
        });
    };
    Game.prototype.checkAnswer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answer, resultArray, correctGuesses, i, resultIndex, color, resultText;
            return __generator(this, function (_a) {
                if (this.gameBoard) {
                    answer = this.gameBoard.getPlayerAnswer();
                    if (this.computer) {
                        resultArray = this.computer.checkAnswer(answer);
                        correctGuesses = 0;
                        for (i = 0; i < resultArray.length; i++) {
                            resultIndex = i;
                            color = resultArray[i].getColor();
                            if (color === 'green') {
                                correctGuesses++;
                            }
                            this.gameBoard.updateBorderColors(resultIndex, color);
                        }
                        resultText = '';
                        if (correctGuesses === this.numberOfItems) {
                            resultText = 'Congratulations! You made it!';
                        }
                        else {
                            resultText = 'Wrong answer! Take a look at the frame colors and try again \n               green = correct, yellow = wrong place, red = not in row';
                        }
                        this.gameUi.showMessage(resultText);
                        this.updateNumberOfGuesses();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    Game.prototype.updateNumberOfGuesses = function () {
        var _a;
        var numberOfGuesses = (_a = this.computer) === null || _a === void 0 ? void 0 : _a.getNumberOfGuesses();
        this.gameUi.showNumberOfGuesses(numberOfGuesses, this.username);
    };
    return Game;
}());
exports.default = Game;
