import Theme from './theme.ts'

/**
 * Class that represents the computer row with items that the Computer is creating.  
 */
class ComputerRow {
    private numberOfItems: number = 0
    private computerRow: string[] = []
    private themeArray: string[] = []

    constructor(numberOfItems: number, themeDecription: string) {
        this.setNumberOfItems(numberOfItems)
        this.setThemeArray(themeDecription)
        this.generateComputerRow()
    }

    /**
     * Gets the number of items that is included in the computer row. 
     * 
     * @returns { number } - number of items included in the computer row.
     */
    public getNumberOfItems(): number {
        if (!this.numberOfItems) {
            throw new Error('Number of items has not been set for the game')
        }
        return this.numberOfItems
    }

    /**
     * Sets the number of items that should be included in the computer row. 
     * 
     * @param numberOfItems { number } - number of items that should be included in the computer row.
     */
    private setNumberOfItems(numberOfItems: number): void {
        if (numberOfItems < 1 || numberOfItems > 8) {
            throw new Error('Pls provide a number between 2 - 8')
        } else {
            this.numberOfItems = numberOfItems
        }
    }

    /**
     * Sets the itemArray if there are 8 items in the provided array.
     * 
     * @param themeArray object [] - the array with themed items chosen for the game. 
     */
    private setThemeArray(themeDecription: string): void {
        const theme = new Theme(themeDecription)
        this.themeArray = theme.getThemeArray()
    }

    /**
    * Gets the computer row. 
    * 
    * @returns { string [] } - the computer row.
    */
    public getComputerRow(): string[] {
        if (this.computerRow === undefined) {
            throw new Error('No computer row has been set for the game')
        }
        return this.computerRow
    }

    /**
     * Creates a random row with names from the chosen theme that has been set in themeArray. 
     * The computer will use the secret row in the game.
     * The number of items will decide how many names that should be included. 
     * 
     * @returns {string [] } - A row with names from the chosen theme.
     */
    private generateComputerRow(): void {
        try {
            const rowLength = this.numberOfItems
            for (let i = 0; i < rowLength; i++) {
                const nextItemIndex = Math.floor(Math.random() * this.themeArray.length)
                const themeItem = this.themeArray[nextItemIndex]
                this.computerRow.push(themeItem)
            }
        } catch (error) {
            if (error instanceof Error) {
                console.log(error)
            }
        }
    }
}

export default ComputerRow