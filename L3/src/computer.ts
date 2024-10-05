import  ComputerRow from './computer-row';

/**
 * Class that represents the computer in the game.
 */
class Computer {
    private computerRow: object[] = []
    private numberOfItems: number = 0
    private numberOfGuesses: number = 0

    constructor(numberOfItems: number, themeArray: object[]) {
        this.setNumberOfItems(numberOfItems)
        this.createComputerRow(themeArray)
    }

    /**
     * Gets the number of items that is used in the game. 
     * 
     * @returns { number } - number of items used in the game.
     */
    public getNumberOfItems() : number {
        if (this.numberOfItems === null) {
            throw Error('Number of items has not been set')
        }
        return this.numberOfItems
    }

     /**
     * Sets the number of items that should be included in the computer row. 
     * 
     * @param numberOfItems { number } - number of items that should be used in the game.
     */
    public setNumberOfItems(numberOfItems: number) : void {
        if (numberOfItems < 1 || numberOfItems > 8) {
            throw new Error('Pls provide a valid number between 1-8')
        } else {
            this.numberOfItems = numberOfItems
        }
    }

    /**
     * Creates a new instance of the ComputerRow class and calls the generateRow method in the ComputerRow class in order to generate a new row that will represent the computer´s row of items.
     * 
     * @param themeArray { object [] } - the array with items from the chosen theme. 
     * @returns 
     */
    private createComputerRow(themeArray: object[]) : void{
        if (this.numberOfItems !== undefined) {
            const computerRow = new ComputerRow(this.numberOfItems, themeArray)
            this.computerRow = computerRow.generateRow()
        } else {
            throw Error('Number of items has not been set yet')
        }
    }

    /**
     * Returns an array with the items that represent the current computer row.
     * 
     * @returns { object [] } - an array with items
     */
    public getComputerRow(): object[] {
        if (this.computerRow === undefined) {
            throw new Error('The computer row has not been created yet')
        }
        return this.computerRow
    }

    /**
     * Gets the number of guesses used in a playround. 
     * 
     * @returns { number } - number of guesses.
    */
    public getNumberOfGuesses(): number {
        return this.numberOfGuesses
    }

    /**
     * Method that checks if the row of items provided by the user matches the computer´s row by checking if the item and the position of the item is the same. An object is created for each item. If the item is in the correct place - the item will get the color green. If the item is present in the row, but in the wrong place - the item will get the color yellow and the color red will be used for items that are not present in the computer´s row. 
     * 
     * @param answer { object [] } - array with items from the user
     * @returns { string } - A text if the user´s guess was correct.
     * @returns { object [] } - An array with objects if the user´s guess wasn´t correct. 
     */
    public checkAnswer(answer: object[]): any {
        if (answer.length !== this.computerRow.length ) {
            throw new Error(`The guess must contain ${this.computerRow.length} items.`)
        } 
        const answerFromPlayer = answer
        let answerWithFeedback = []
        let numberOfCorrectItems: number = 0

        for (let i = 0; i < answerFromPlayer.length; i++) {
            let itemObject: object = { item: String, color: String }
            if (answerFromPlayer[i] === this.computerRow[i]) {
                numberOfCorrectItems++
                itemObject = { item: answerFromPlayer[i], color: 'green' }
            } else if (this.computerRow.includes(answerFromPlayer[i])) {
                itemObject = { item: answerFromPlayer[i], color: 'yellow' }
            } else {
                itemObject = { item: answerFromPlayer[i], color: 'red' }
            }
            answerWithFeedback.push(itemObject)
        }
        this.numberOfGuesses ++
        if (numberOfCorrectItems >= this.numberOfItems) {
            return JSON.stringify('Congratulations! You made it!')
        } else {
            return JSON.stringify(answerWithFeedback)
        }
    }
}

export default Computer