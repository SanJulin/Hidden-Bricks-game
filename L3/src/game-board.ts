
/**
 * Class that represents the game board.
 */
class GameBoard {
    private numberOfSigns : number = 5
    private gameArr : object [] = []
    private gameBoard : any = ''
    
    
    constructor(numberOfSigns: number, gameArr: object[]) {
        this.numberOfSigns = numberOfSigns
        this.gameArr = gameArr
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
            for (let i = 0; i < this.gameArr.length; i++) {
                const option = document.createElement('div')
                option.className = 'option'
                const img = document.createElement('img')
                img.setAttribute('src', `/img/flags/${i}.webp`)
                img.setAttribute('alt', `${this.gameArr[i]}`)
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