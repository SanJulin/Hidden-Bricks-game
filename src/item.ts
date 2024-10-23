/**
 * Class that represents one item in the game. 
 */
class Item {
    private id: number = 0
    private name: string = ''
    private color: string = ''
    private image: HTMLImageElement | undefined

    constructor(id: number, name: string, url?: string) {
        this.id = id
        this.name = name
        if (url) {
            this.setImage(url)
        }
    }

    /**
     * Gets the name of the current item used in the game. 
     * 
     * @returns { string } - the name of the current item.
     */
    public getName(): string {
        return this.name
    }

    /**
     * Gets the id of the current item used in the game. 
     * 
     * @returns { number } - the id of the current item.
     */
    public getId(): number {
        return this.id
    }

    /**
     * Gets the color of the current item used in the game. 
     * 
     * @returns { string } - the color of the current item.
     */
    public getColor(): string {
        return this.color
    }

    /**
     * Sets the color for the current item that is used in the game, depending on if the player has put the item in the correct place (green), the wrong place (yellow) or if the item is not present in the row (red).
     * 
     * @param theme { string } - the name of the item.
     */
    public setColor(color: string): void {
        if (color === 'green' || color === 'yellow' || color === 'red') {
            this.color = color
        } else {
            throw new Error('Only green, yellow and red are valid colors')
        }
    }

    /**
     * Gets the item image if it exists.
     */
    public getImage(): HTMLImageElement | undefined {
        if (this.image) {
            return this.image
        }
    }

    /**
     * Sets the item image if an url was provided. Looks like this if it comes from the Theme class: `../img/${this.theme}/${(this.themeArray[i])}.jpg`.
     * 
     * @param url - the url to the image in the img folder
     */
    public setImage(url: string) {
        const image = document.createElement('img')
        image.setAttribute('src', url)
        image.setAttribute('alt', this.name)
        this.image = image
    }
}

export default Item