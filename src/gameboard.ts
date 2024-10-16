import Item from './Item'
import Theme from './Theme.ts'

/**
 * Class that represents the game board.
 */
class GameBoard {
    private numberOfItems: number = 5
    private theme: string
    private gameArray: Item[] = []
    private gameBoard: any = ''
    private playerGuessRow: any
    private optionRow: any

    constructor(numberOfItems: number, theme: string) {
        this.numberOfItems = numberOfItems
        this.theme = theme
        this.gameBoard = document.getElementById('game-board')
        this.dragstartHandler = this.dragstartHandler.bind(this)
        this.dragoverHandler = this.dragoverHandler.bind(this)
        this.dropHandler = this.dropHandler.bind(this)
        this.gameArray = this.getGameArray()
        this.createGameBoard()
    }

    getGameArray() : Item [] {
        const theme = new Theme(this.theme)
        const themeArray = theme.getItemArray()
        return themeArray
    }

    createGameBoard() {
        this.playerGuessRow = document.getElementById('player-guess-row')

        if (this.playerGuessRow) {
            for (let i = 0; i < this.numberOfItems; i++) {
                const playerGuessBox = document.createElement('div')
                playerGuessBox.className = 'guess'
                playerGuessBox.id = `guess${i + 1}`
                playerGuessBox.addEventListener('dragover', this.dragoverHandler)
                playerGuessBox.addEventListener('drop', this.dropHandler)
                this.playerGuessRow.appendChild(playerGuessBox)
            }
        }

        const clearAllButton = document.createElement('button')
        clearAllButton.textContent = 'Clear all'

        clearAllButton.addEventListener('click', (event) => {
            event.preventDefault()
            this.clearAllGuesses()
        })

        const clearWrongGuessesButton = document.createElement('button')
        clearWrongGuessesButton.textContent = 'Clear wrong guesses'

        clearWrongGuessesButton.addEventListener('click', (event) => {
            event.preventDefault()
            this.clearWrongGuesses()
        })

        this.playerGuessRow.appendChild(clearAllButton)
        this.playerGuessRow.appendChild(clearWrongGuessesButton)

        this.gameBoard.appendChild(this.playerGuessRow)

        this.optionRow = document.getElementById('option-row')

        if (this.optionRow) {
            for (let i = 0; i < this.gameArray.length; i++) {
                const option = document.createElement(`div`)
                option.className = 'option'
                option.id = `option${i + 1}`
                option.textContent = this.gameArray[i].getName()
                const img = document.createElement('img')
                img.setAttribute('src', `../img/${this.theme}/${(this.gameArray[i].getName())}.jpg`)
                img.setAttribute('alt', `${this.gameArray[i].getName()}`)
                option.appendChild(img)
                option.setAttribute('draggable', 'true')
                option.addEventListener('dragstart', this.dragstartHandler)
                this.optionRow.appendChild(option)
            }
        }
        this.gameBoard.appendChild(this.optionRow)
    }

    updatePlayerGuessItem(playerGuessItem: any, chosen: any) {
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
        const droppedElement = document.getElementById(data)
        const droppedElementCopy = droppedElement?.cloneNode(true)

        if (droppedElementCopy && event.target instanceof HTMLElement) {
            event.target.appendChild(droppedElementCopy)
        }
    }

    clearAllGuesses() {
        for (let i = 0; i < this.playerGuessRow.children.length; i++) {
            if (this.playerGuessRow.children[i].firstElementChild !== null) {
                const child = this.playerGuessRow.children[i].firstElementChild
                this.playerGuessRow.children[i].removeChild(child)
                this.playerGuessRow.children[i].style.border = '3px solid black'
            }
        }
    }

    clearWrongGuesses() {
        for (let i = 0; i < this.playerGuessRow.children.length; i++) {
            if (this.playerGuessRow.children[i].firstElementChild !== null && this.playerGuessRow.children[i].style.borderColor !== 'green') {
                const child = this.playerGuessRow.children[i].firstElementChild
                this.playerGuessRow.children[i].removeChild(child)
                this.playerGuessRow.children[i].style.border = '3px solid black'
            }
        }
    }

    getPlayerAnswer() {
        let answerArray: String[] = []
        for (let i = 0; i < this.playerGuessRow.children.length; i++) {
            if (this.playerGuessRow.children[i].firstElementChild !== null) {
                const answer = this.playerGuessRow.children[i].firstElementChild.textContent
                answerArray.push(answer)
            }
        }
        return answerArray
    }

    updateBorderColors(result: Item[]) {
        for (let i = 0; i < result.length; i++) {
            const color = result[i].getColor()
            this.playerGuessRow.children[i].style.border = '10px solid ' + color
        }
    }
}

export default GameBoard
