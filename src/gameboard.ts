import Item from "./item"

/**
 * Class that represents the game board.
 */
class GameBoard {
    private numberOfItems: number = 5
    private gameArray: Item[]
    private gameBoard: any = ''


    constructor(numberOfItems: number, gameArr: Item[]) {
        this.numberOfItems = numberOfItems
        this.gameArray = gameArr
        this.gameBoard = document.getElementById('game-board')
        this.createGameBoard()
    }

    createGameBoard() {
        console.log('create')

        const playerRow = document.getElementById('player-row')

        if (playerRow) {
            for (let i = 0; i < this.numberOfItems; i++) {
                const playerGuessItem = document.createElement('div')
                playerGuessItem.className = 'player-guess'

                playerRow.appendChild(playerGuessItem)

                playerGuessItem.addEventListener('drop', (event) => {
                    event.preventDefault()
                    const chosenItem = event.detail
                    this.addPlayerGuessItem(chosenItem)

                })

            }

            this.gameBoard.appendChild(playerRow)

            const optionRow = document.getElementById('option-row')

            if (optionRow) {
                for (let i = 0; i < this.gameArray.length; i++) {
                    const option = document.createElement('div')
                    option.className = 'option'
                    option.textContent = this.gameArray[i].getName()
                    const img = document.createElement('img')
                    img.setAttribute('src', `../img/flags/${(this.gameArray[i].getName())}.webp`)
                    img.setAttribute('alt', `${this.gameArray[i].getName()}`)

                    option.appendChild(img)
                    optionRow.appendChild(option)
                }
                this.gameBoard.appendChild(optionRow)

            }


            const message = document.createElement('p')
            message.textContent = `Guess which ${this.numberOfItems} items that should be in the computer row by dropping the pictures in the computer row and click on check answer!`
            this.gameBoard.appendChild(message)

        }
    }
    addPlayerGuessItem(chosen: any) {
        const chosenItem = chosen
        console.log('added')
    }
}

export default GameBoard