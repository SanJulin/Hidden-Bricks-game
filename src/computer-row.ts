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
        this.getThemeArray(themeDecription)
    }

    /**
     * Gets the number of items that is included in the computer row. 
     * 
     * @returns { number } - number of items included in the computer row.
     */
    public getNumberOfItems(): number {
        if (this.numberOfItems === null) {
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
    private getThemeArray(themeDecription: string): void {
        const theme = new Theme(themeDecription)
        this.themeArray = theme.getThemeArray()
    }

    /**
     * Creates a random row based on the itemArray and returns it to the computer. 
     * 
     * @returns {string [] } - A row with items. 
     */
    public generateRow(): string[] {
        const rowLength = this.numberOfItems
        for (let i = 0; i < rowLength; i++) {
            const nextItemIndex = Math.floor(Math.random() * this.themeArray.length)
            const themeItem = this.themeArray[nextItemIndex]
            this.computerRow.push(themeItem)
        }
        return this.computerRow
    }
}

export default ComputerRow