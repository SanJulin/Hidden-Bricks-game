/**
 * Class that represents one item in the game. 
 */
class Item {
    private id: number = 0
    private name: string = ''
    private color: string = ''
    private image: HTMLImageElement | undefined

    constructor(id: number, name: string, url?: string) {
        this.setId(id)
        this.setName(name)
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
     * Sets the name for the current item that will be used in the game.  
     * 
     * @param theme { string } - the name of the item.
     */
    private setName(name: string): void {
        if (name === '') {
            throw new Error('The item must have a name')
        } else {
            this.name = name
        }
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
     * Sets the id for the current item that will be used in the game.  
     * 
     * @param id { number } - the id of the item.
     */
    private setId(id: number): void {
        if (id === null) {
            throw new Error('The item must have an id')
        } else {
            this.id = id
        }
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
     *  
     */
    public getImage(): HTMLImageElement | undefined {
        if (this.image) {
            return this.image
        }
    }

    public setImage(url: string) {
        const image = document.createElement('img')
        image.setAttribute('src', url)
        image.setAttribute('alt', this.name)
        this.image = image
    }
}

export default Item