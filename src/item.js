"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that represents one item in the game.
 */
var Item = /** @class */ (function () {
    function Item(id, name, url) {
        this.id = 0;
        this.name = '';
        this.color = '';
        this.id = id;
        this.name = name;
        if (url) {
            this.setImage(url);
        }
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
     * Gets the id of the current item used in the game.
     *
     * @returns { number } - the id of the current item.
     */
    Item.prototype.getId = function () {
        return this.id;
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
    /**
     * Gets the item image if it exists.
     */
    Item.prototype.getImage = function () {
        if (this.image) {
            return this.image;
        }
    };
    /**
     * Sets the item image if an url was provided. Looks like this if it comes from the Theme class: `../img/${this.theme}/${(this.themeArray[i])}.jpg`.
     *
     * @param url - the url to the image in the img folder
     */
    Item.prototype.setImage = function (url) {
        var image = document.createElement('img');
        image.setAttribute('src', url);
        image.setAttribute('alt', this.name);
        this.image = image;
    };
    return Item;
}());
exports.default = Item;
