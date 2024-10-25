import Item from './item.ts'
import Theme from './theme.ts'

/**
 * Class that represents the game board.
 */
class GameBoard {
    private numberOfBricks: number = 5
    private theme: Theme
    private optionArray: Item[] = []
    private playerGuessRow: HTMLDivElement
    private optionRow: HTMLDivElement

    constructor(numberOfItems: number, themeObject: Theme) {
        this.numberOfBricks = numberOfItems
        this.theme = themeObject
        this.optionArray = this.theme.getItemArray()
        this.playerGuessRow = document.getElementById('player-guess-row') as HTMLDivElement
        this.optionRow = document.getElementById('option-row') as HTMLDivElement
        this.dragstartHandler = this.dragstartHandler.bind(this)
        this.dragoverHandler = this.dragoverHandler.bind(this)
        this.dropHandler = this.dropHandler.bind(this)
        this.createGameBoard()
    }

    /**
     * Creates the Gameboard
     */
    createGameBoard() {
        this.createPlayerGuessRow()
        this.createOptionRow()

        this.createClearAllButton()
        this.createClearWrongButton()
    }

    /**
     * Creates a row with empty boxes where the player should drop bricks.
     */
    createPlayerGuessRow() {
        for (let i = 0; i < this.numberOfBricks; i++) {
            const playerGuessBox = document.createElement('div') as HTMLDivElement
            playerGuessBox.className = 'guess'
            playerGuessBox.id = `guess${i + 1}`
            playerGuessBox.addEventListener('dragover', this.dragoverHandler)
            playerGuessBox.addEventListener('drop', this.dropHandler)
            this.playerGuessRow.appendChild(playerGuessBox)
        }
    }

    /**
     * Creates a row with bricks that the user can choose from. Each brick shows an item with an image.
     */
    createOptionRow() {
        for (let i = 0; i < this.optionArray.length; i++) {
            const option = document.createElement(`div`) as HTMLDivElement
            option.className = 'option'
            option.id = `option${this.optionArray[i].getId()}`
            option.textContent = this.optionArray[i].getName()
            const image = this.optionArray[i].getImage()

            if (image) {
                option.appendChild(image)
            }
            option.setAttribute('draggable', 'true')
            option.addEventListener('dragstart', this.dragstartHandler)
            this.optionRow.appendChild(option)
        }
    }

    //Button to clear the complete row of guessed bricks.
    createClearAllButton() {
        const clearAllButton = document.createElement('button')
        clearAllButton.textContent = 'clear all'

        clearAllButton.addEventListener('click', (event) => {
            event.preventDefault()
            const clearingType = 'all'
            this.clearGuesses(clearingType)
        })
        this.playerGuessRow.appendChild(clearAllButton)
    }

    //Button to clear only the wrong answers in the row of guessed bricks.
    createClearWrongButton() {
        const clearWrongGuessesButton = document.createElement('button')
        clearWrongGuessesButton.textContent = 'clear wrong guesses'

        clearWrongGuessesButton.addEventListener('click', (event) => {
            event.preventDefault()
            const clearingType = 'wrong'
            this.clearGuesses(clearingType)
        })
        this.playerGuessRow.appendChild(clearWrongGuessesButton)
    }

    /**
     * Adds the brick that the player has moved to the box that the player dropped the brick on. 
     *
     * @param playerGuessBox - the box where the player can place the brick that the want to include in the row.
     * @param chosenBrick - the brick that the player has chosen. 
     */
    updatePlayerGuessBrick(playerGuessBox: HTMLDivElement, playersChosenBrick: HTMLDivElement) {
        const chosenBrick = playersChosenBrick
        playerGuessBox.appendChild(chosenBrick)
    }

    /**
     * Makes it possible to move the brick. 
     * Code from MDN docs has been used to handle this.
     * 
     * @param event - starts the moving of the brick
     */
    dragstartHandler(event: DragEvent) {
        if (event.target instanceof HTMLElement) {
            event.dataTransfer?.setData("text/plain", event.target.id)
        }
    }

    /**
     * Handles the moving of the brick.
     * Code from MDN docs has been used to handle this.
     * 
     * @param event handles the moving of the brick
     */
    dragoverHandler(event: DragEvent) {
        event.preventDefault()
        event.dataTransfer!.dropEffect = "copy"
    }

    /**
     * Handles the dropping of the brick.
     * Code from MDN docs has been used to handle this.
     * 
     * @param event - handles the dropping of the brick
     */
    dropHandler(event: DragEvent) {
        event.preventDefault()
        const data = event.dataTransfer!.getData("text/plain")
        const droppedElement = document.getElementById(data) as HTMLDivElement
        const droppedElementCopy = droppedElement?.cloneNode(true)

        if (droppedElementCopy && event.target instanceof HTMLElement && event.target.children.length === 0) {
            event.target.appendChild(droppedElementCopy)
        }
    }

    /**
     * Clears all guesses from the guessing row.
     * 
     * @param clearingType - shows if the clearAll button or the clearWrong button has been pressed.
     */
    clearGuesses(clearingType: string) {
        for (let i = 0; i < this.playerGuessRow.children.length; i++) {
            const element = this.playerGuessRow.children[i] as HTMLDivElement
            const elementChild = this.playerGuessRow.children[i].firstElementChild as HTMLDivElement
            if (elementChild) {
                if (clearingType === 'wrong' && element.style.borderColor !== 'green') {
                    element.removeChild(elementChild)
                    element.style.border = '3px solid black'   
                } else if (clearingType === 'all') {
                    element.removeChild(elementChild)
                    element.style.border = '3px solid black'   
                }
            }
        }
    }

    /**
     * Gets an array containing the items that the player has guessed on.
     * 
     * @returns the array containing the items that the player has guessed on.
     */
    getPlayerAnswer(): Item[] {
        let answerArray: Item[] = []
        for (let i = 0; i < this.numberOfBricks; i++) {
            const answer = this.playerGuessRow.children[i].firstElementChild?.textContent as string
            if (answer !== undefined) {
                const item = new Item(i, answer)
                answerArray.push(item)
            }
        }
        return answerArray
    }

    /**
     * Updates the border colors on the boxes in the guessed row. 
     * 
     * @param itemIndex - the index of the item on the brick.
     * @param color - the color of the border.
     */
    updateBorderColors(itemIndex: number, color: string) {
        const element = this.playerGuessRow.children[itemIndex] as HTMLDivElement
        element.style.border = '10px solid ' + color
    }
}

export default GameBoard


