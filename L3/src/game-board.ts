export class GameBoard {
    private gameArr : string [] = []
    private gameBoard : any
    
    
    constructor(gameArr: string[]) {
        this.gameArr = gameArr
        this.gameBoard = document.getElementById('game-board')
        this.createGameBoard()
    }

    createGameBoard() {
        console.log('create')
        for (let i = 0; i < this.gameArr.length; i++) {
            const box = document.createElement('div')
            box.textContent = 'box'
            box.className = 'boxes'
            this.gameBoard.appendChild(box)
        }
        const message = document.createElement('p')
        message.textContent = 'Start Game'
        this.gameBoard.appendChild(message)

    }





}