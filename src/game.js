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
var theme_ts_1 = require("./theme.ts");
var computer_ts_1 = require("./computer.ts");
var item_ts_1 = require("./item.ts");
/**
 * Class that represents the game.
 */
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.theme = '';
        this.gameArray = [];
        var usernameText = document.createElement('p');
        usernameText.textContent = 'Welcome! Enter your username and click on start to start the game!';
        var startButton = document.createElement('button');
        startButton.textContent = 'start';
        var inputName = document.createElement('input');
        var startElement = document.getElementById('start');
        startElement === null || startElement === void 0 ? void 0 : startElement.appendChild(usernameText);
        startElement === null || startElement === void 0 ? void 0 : startElement.appendChild(startButton);
        startElement === null || startElement === void 0 ? void 0 : startElement.appendChild(inputName);
        startButton.addEventListener('click', function (event) {
            event.preventDefault();
            _this.createGame();
            usernameText.textContent = '';
            startButton.style.display = 'none';
            inputName.style.display = 'none';
        });
    }
    Game.prototype.createGame = function () {
        var _this = this;
        this.theme = 'flags';
        this.themeObject = new theme_ts_1.default(this.theme);
        this.gameArray = this.themeObject.getItemArray();
        for (var i = 0; i < this.gameArray.length; i++) {
            console.log("this gameArray: ".concat(this.gameArray[i].getName()));
        }
        var computer = new computer_ts_1.default(3, this.theme);
        console.log(computer);
        this.gameBoard = new gameboard_ts_1.default(3, this.gameArray);
        console.log(computer);
        console.log(this.gameBoard);
        var answerButton = document.getElementById('answer-button');
        if (answerButton instanceof HTMLButtonElement) {
            this.answerButton = answerButton;
        }
        else {
            console.log('The element is not a button');
        }
        if (this.answerButton) {
            this.answerButton.addEventListener('click', function (event) {
                event.preventDefault();
                var result = _this.checkAnswer(computer);
                console.log(result);
            });
        }
    };
    Game.prototype.checkAnswer = function (computer) {
        return __awaiter(this, void 0, void 0, function () {
            var answer, answerCopy, i, item, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('in check answer method');
                        if (!this.gameBoard) return [3 /*break*/, 2];
                        answer = this.gameBoard.getPlayerAnswer();
                        console.log(answer);
                        answerCopy = [];
                        for (i = 0; i < answer.length; i++) {
                            item = new item_ts_1.default(i + 1, "".concat(answer[i]));
                            console.log("item ".concat(item));
                            answerCopy.push(item);
                        }
                        console.log("answercopy ".concat(JSON.stringify(answerCopy)));
                        return [4 /*yield*/, computer.checkAnswer(answerCopy)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        _a.label = 2;
                    case 2: return [2 /*return*/, 'result'];
                }
            });
        });
    };
    return Game;
}());
exports.default = Game;
