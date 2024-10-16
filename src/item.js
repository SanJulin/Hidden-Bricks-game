"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that represents one item in the game.
 */
var Item = /** @class */ (function () {
    function Item(id, name) {
        this.id = 0;
        this.name = '';
        this.color = '';
        this.setId(id);
        this.setName(name);
    }
    /**
     * Gets the name of the current item used in the game.
     *
     * @returns { string } - the name of the current item.
     */
    Item.prototype.getName = function () {
        return this.name;
    };
    /**
     * Sets the name for the current item that will be used in the game.
     *
     * @param theme { string } - the name of the item.
     */
    Item.prototype.setName = function (name) {
        if (name === '') {
            throw new Error('The item must have a name');
        }
        else {
            this.name = name;
        }
    };
    /**
     * Gets the id of the current item used in the game.
     *
     * @returns { number } - the id of the current item.
     */
    Item.prototype.getId = function () {
        return this.id;
    };
    /**
     * Sets the id for the current item that will be used in the game.
     *
     * @param id { number } - the id of the item.
     */
    Item.prototype.setId = function (id) {
        if (id === null) {
            throw new Error('The item must have an id');
        }
        else {
            this.id = id;
        }
    };
    /**
     * Gets the color of the current item used in the game.
     *
     * @returns { string } - the color of the current item.
     */
    Item.prototype.getColor = function () {
        return this.color;
    };
    /**
     * Sets the color for the current item that is used in the game, depending on if the player has put the item in the correct place (green), the wrong place (yellow) or if the item is not present in the row (red).
     *
     * @param theme { string } - the name of the item.
     */
    Item.prototype.setColor = function (color) {
        if (color === 'green' || color === 'yellow' || color === 'red') {
            this.color = color;
        }
        else {
            throw new Error('Only green, yellow and red are valid colors');
        }
    };
    return Item;
}());
exports.default = Item;
