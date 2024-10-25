import ComputerRow from './computer-row.ts';
import Item from './item.ts';

/**
 * Class that represents the computer in the game.
 */
class Computer {
    private computerRow: string[] = []
    private numberOfGuesses: number = 0

    constructor(numberOfItems: number, themeDescription: string) {
        this.createComputerRow(numberOfItems, themeDescription)
    }

   /**
    * Creates a new instance of the ComputerRow class and calls the generateRow method in the ComputerRow class in order to generate a new row that will represent the computer´s row of items.
    * 
    * @param numberOfItems - the number of items that should be used in the computer row.
    * @param themeDescription - the chosen theme
    */
    private createComputerRow(numberOfItems: number, themeDescription: string): void {
            const computerRow = new ComputerRow(numberOfItems, themeDescription)
            this.computerRow = computerRow.getComputerRow()
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
     * Public method that calls other private methods in the same class to give the player feedback on the result and update the number of guesses used.
     * 
     * @param answerFromPlayer { Item [] } - array with items from the user
     * @returns { Item [] } - An array with objects if the user´s guess wasn´t correct. 
     */
    public getFeedBackFromComputer(answerFromPlayer: Item[]): Item[] {
        if (answerFromPlayer.length !== this.computerRow.length) {
            throw new Error(`The guess must contain ${this.computerRow.length} items.`)
        }
        
        const feedbackFromComputer = this.addColorsToItems(answerFromPlayer)
        this.updateNumberOfGuesses()

        return feedbackFromComputer
    }

    /**
     * Checks with the computer if the answer is correct. If the item is in the correct place - the item will get the color green. If the item is present in the row, but in the wrong place - the item will get the color yellow and the color red will be used for items that are not present in the computer´s row. 
     * @param answerFromPlayer - the array with items in the players answer.
     * @returns answerFromPlayer - the same array, but with feedback in form of colors.
     */
    private addColorsToItems(answerFromPlayer: Item[]): Item[] {
        for (let i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i].getName() === this.computerRow[i]) {
                answerFromPlayer[i].setColor('green')
            } else if (this.computerRow.includes(answerFromPlayer[i].getName())) {
                answerFromPlayer[i].setColor('yellow')
            } else {
                answerFromPlayer[i].setColor('red')
            }
        }
        return answerFromPlayer
    }

    /**
     * Updates the number of guesses the player has used with 1 for each round. 
     */
    private updateNumberOfGuesses() {
        this.numberOfGuesses++
    }
}

export default Computer