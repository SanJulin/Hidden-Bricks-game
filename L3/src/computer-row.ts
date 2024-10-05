/**
 * Class that represents the computer row with items that the Computer is creating.  
 */
class ComputerRow {
    private numberOfItems: number = 0
    private itemArray: object[] = []
    private computerRow: object[] = []

    constructor(numberOfItems: number, itemArray: object[]) {
        this.setNumberOfItems(numberOfItems)
        this.setItemArray(itemArray)
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
    private setNumberOfItems(numberOfItems: number) : void {
        if (numberOfItems < 1 || numberOfItems > 8) {
            throw new Error('Pls provide a number between 1 - 8')
        } else {
            this.numberOfItems = numberOfItems
        }
    }

    /**
     * Sets the itemArray if there are 8 items in the provided array.
     * 
     * @param itemArray object [] - the array with themed items chosen for the game. 
     */
    private setItemArray(itemArray: object[]) : void{
        if (itemArray.length !== 8) {
            throw new Error('The item array must contain 8 items')
        }
        this.itemArray = itemArray
    }

    /**
     * Creates a random row based on the itemArray and returns it to the computer. 
     * 
     * @returns {object [] } - A row with items. 
     */
    public generateRow(): object[] {
        const rowLength = this.numberOfItems
        for (let i = 0; i < rowLength; i++) {
            const nextItemIndex = Math.floor(Math.random() * this.itemArray.length)
            const nextItem = this.itemArray[nextItemIndex]
            this.computerRow.push(nextItem)
        }
        return this.computerRow
    }
}

export default ComputerRow