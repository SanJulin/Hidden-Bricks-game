import Item from './item.ts'
import Theme from './theme.ts'

/**
 * Class that represents the game board.
 */
class GameBoard {
    private numberOfItems: number = 5
    private theme: Theme
    private optionArray: Item[] = []
    private playerGuessRow: HTMLDivElement
    private optionRow: HTMLDivElement

    constructor(numberOfItems: number, themeObject: Theme) {
        this.numberOfItems = numberOfItems
        this.theme = themeObject
        this.optionArray = this.theme.getItemArray()
        this.playerGuessRow = document.getElementById('player-guess-row') as HTMLDivElement
        this.optionRow = document.getElementById('option-row') as HTMLDivElement
        this.dragstartHandler = this.dragstartHandler.bind(this)
        this.dragoverHandler = this.dragoverHandler.bind(this)
        this.dropHandler = this.dropHandler.bind(this)
        this.createGameBoard()
    }

    createGameBoard() {
        this.createPlayerGuessRow()
        this.createOptionRow()

        this.createClearAllButton()
        this.createClearWrongButton()
    }

    createPlayerGuessRow() {
        for (let i = 0; i < this.numberOfItems; i++) {
            const playerGuessBox = document.createElement('div') as HTMLDivElement
            playerGuessBox.className = 'guess'
            playerGuessBox.id = `guess${i + 1}`
            playerGuessBox.addEventListener('dragover', this.dragoverHandler)
            playerGuessBox.addEventListener('drop', this.dropHandler)
            this.playerGuessRow.appendChild(playerGuessBox)
        }
    }

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

    updatePlayerGuessItem(playerGuessItem: HTMLDivElement, chosen: HTMLDivElement) {
        const chosenItem = chosen
        playerGuessItem.appendChild(chosenItem)
    }

    dragstartHandler(event: DragEvent) {
        if (event.target instanceof HTMLElement) {
            event.dataTransfer?.setData("text/plain", event.target.id)
        }
    }

    dragoverHandler(event: DragEvent) {
        event.preventDefault()
        event.dataTransfer!.dropEffect = "copy"
    }

    dropHandler(event: DragEvent) {
        event.preventDefault()
        const data = event.dataTransfer!.getData("text/plain")
        const droppedElement = document.getElementById(data) as HTMLDivElement
        const droppedElementCopy = droppedElement?.cloneNode(true)

        if (droppedElementCopy && event.target instanceof HTMLElement && event.target.children.length === 0) {
            event.target.appendChild(droppedElementCopy)
        }
    }

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

    getPlayerAnswer(): Item[] {
        let answerArray: Item[] = []
        for (let i = 0; i < this.numberOfItems; i++) {
            const answer = this.playerGuessRow.children[i].firstElementChild?.textContent as string
            if (answer !== undefined) {
                const item = new Item(i, answer)
                answerArray.push(item)
            }
        }
        return answerArray
    }

    updateBorderColors(itemIndex: number, color: string) {
        const element = this.playerGuessRow.children[itemIndex] as HTMLDivElement
        element.style.border = '10px solid ' + color
    }
}

export default GameBoard


