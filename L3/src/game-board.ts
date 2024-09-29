

export class GameBoard {
    private numberOfSigns : number = 5
    private gameArr : string [] = []
    private gameBoard : any
    
    
    constructor(numberOfSigns: number, gameArr: string[]) {
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
                optionRow.appendChild(option)
            }
        }

        this.gameBoard.appendChild(optionRow)
        const message = document.createElement('p')
        message.textContent = 'Start Game'
        this.gameBoard.appendChild(message)

    }
}