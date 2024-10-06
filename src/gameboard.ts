import Item from "./item"

/**
 * Class that represents the game board.
 */
class GameBoard {
    private numberOfSigns : number = 5
    private gameArray : Item[]
    private gameBoard : any = ''
    
    
    constructor(numberOfSigns: number, gameArr: Item[]) {
        this.numberOfSigns = numberOfSigns
        this.gameArray = gameArr
        this.gameBoard = document.getElementById('game-board')
        this.createGameBoard()
    }

    createGameBoard() {
        console.log('create')

        const playerRow = document.getElementById('player-row')
        
        if (playerRow) {
            for (let i = 0; i < this.numberOfSigns; i++) {
                const playerGuess = document.createElement('div')
                playerGuess.className = 'player-guess'
                playerRow.appendChild(playerGuess)
            }
        }        

        this.gameBoard.appendChild(playerRow)

        const optionRow = document.getElementById('option-row')

        if(optionRow) {
            for (let i = 0; i < this.gameArray.length; i++) {
                const option = document.createElement('div')
                option.className = 'option'
                option.textContent = `hello ${(this.gameArray[i].getName())}`
                const img = document.createElement('img')
                img.setAttribute('src', `../img/flags/${(this.gameArray[i].getName())}.webp`)
                img.setAttribute('alt', `${(this.gameArray[i].getName())}`)
                option.appendChild(img)
                optionRow.appendChild(option)
            }
            this.gameBoard.appendChild(optionRow)
            
        }


        const message = document.createElement('p')
        message.textContent = 'Start Game'
        this.gameBoard.appendChild(message)

    }
}

export default GameBoard