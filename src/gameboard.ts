import Item from "./item"

/**
 * Class that represents the game board.
 */
class GameBoard {
    private numberOfItems: number = 5
    private gameArray: Item[]
    private gameBoard: any = ''
    private playerGuessRow: any
    private optionRow: any

    constructor(numberOfItems: number, gameArr: Item[]) {
        this.numberOfItems = numberOfItems
        this.gameArray = gameArr
        this.gameBoard = document.getElementById('game-board')
        this.dragstartHandler = this.dragstartHandler.bind(this)
        this.dragoverHandler = this.dragoverHandler.bind(this)
        this.dropHandler = this.dropHandler.bind(this)
        this.createGameBoard()
    }

    createGameBoard() {
        console.log('create')

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

        const clearButton = document.createElement('button')
        clearButton.textContent = 'clear all'

        clearButton.addEventListener('click', (event) => {
            event.preventDefault()
            this.clearPlayerGuesses()
        })

        this.playerGuessRow.appendChild(clearButton)

        this.gameBoard.appendChild(this.playerGuessRow)

        this.optionRow = document.getElementById('option-row')

        if (this.optionRow) {
            for (let i = 0; i < this.gameArray.length; i++) {
                const option = document.createElement(`div`)
                option.className = 'option'
                option.id = `option${i + 1}`
                option.textContent = this.gameArray[i].getName()
                option.setAttribute('draggable', 'true')
                const img = document.createElement('img')
                img.setAttribute('src', `../img/flags/${(this.gameArray[i].getName())}.webp`)
                img.setAttribute('alt', `${this.gameArray[i].getName()}`)

                option.appendChild(img)
                option.addEventListener('dragstart', this.dragstartHandler)
                this.optionRow.appendChild(option)
            }
        }
        this.gameBoard.appendChild(this.optionRow)

        const message = document.createElement('p')
        message.textContent = `Guess which ${this.numberOfItems} items that should be in the computer row by dropping the pictures in the above row and click on check answer!`
        this.gameBoard.appendChild(message)
    }

    updatePlayerGuessItem(playerGuessItem: any, chosen: any) {
        const chosenItem = chosen
        playerGuessItem.appendChild(chosenItem)
        console.log('added')
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
            console.log('dropped')
        }
    }

    clearPlayerGuesses() {
        for (let i = 0; i < this.playerGuessRow.children.length; i++) {
            if (this.playerGuessRow.children[i].firstElementChild !== null) {
                const child = this.playerGuessRow.children[i].firstElementChild
                console.log(child)
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
                console.log(`answer ${answer}`)
                answerArray.push(answer)
            }
        }
        console.log(answerArray)
        return answerArray
    }

    updateBorderColors(result: Item[]) {
        console.log('in update')
        for (let i = 0; i < result.length; i++) {
            const color = result[i].getColor()
            console.log(color)

            this.playerGuessRow.children[i].style.border = '10px solid ' + color
        }
    }
}

export default GameBoard
