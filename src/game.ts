import '../css/styles.css'
import GameBoard from './Gameboard.ts'
import Computer from './Computer.ts'
import Item from './Item.ts'
import GameUi from './GameUi.ts'

/**
 * Class that represents the game.
 */
class Game {
  private themeString: string = ''
  private gameBoard: GameBoard | undefined
  private gameElement: HTMLElement | undefined
  private userMessage: HTMLElement | undefined
  private answerButton: HTMLButtonElement
  private numberOfItems: number | undefined
  private gameUi: GameUi
  private username: string = ''
  private computer: Computer | undefined

  constructor() {
    this.gameElement = document.getElementById('game') as HTMLElement
    this.userMessage = document.getElementById('user-message') as HTMLElement
    this.answerButton = document.getElementById('answer-button') as HTMLButtonElement
    this.gameUi = new GameUi()
    this.start()
  }

  async start() {
    console.log('in start')
    if (this.gameUi) {
      this.username = await this.gameUi.getUsername()
      console.log(`Hello ${this.username}`)
      this.themeString = await this.gameUi.getChoosenTheme()
      console.log(`theme ${this.themeString}`)
      this.numberOfItems = await this.gameUi.getNumberOfItems()
      console.log(`number of items${this.numberOfItems}`)
    }
      this.createGame()
  }

  createGame() {

    if(this.numberOfItems && this.themeString) {
      this.computer = new Computer(this.numberOfItems, this.themeString)

      this.gameBoard = new GameBoard(this.numberOfItems, this.themeString) 
  
      this.gameUi.showUserInstructions(this.numberOfItems)
    }
      this.answerButton.textContent = 'check answer'
      this.answerButton.style.display = 'block'
  
      this.answerButton.addEventListener('click', (event) => {
          this.checkAnswer()
      })
    
  }

  async checkAnswer() {

    if (this.gameBoard) {
      const answer = this.gameBoard.getPlayerAnswer()
      let answerCopy: Item[] = []
      for (let i = 0; i < answer.length; i++) {
        const item = new Item(i + 1, `${answer[i]}`)
        answerCopy.push(item)
      }

      if (this.computer) {
        const result = await this.computer.checkAnswer(answerCopy)
        console.log(result)

        let correctGuesses = 0
        for (let i = 0; i < result.length; i++) {
          if (result[i].getColor() === 'green') {
            correctGuesses++
          }
        }
        let resultText = ''
        if (correctGuesses === this.numberOfItems) {
          resultText = 'Congratulations! You made it!'
        } else {
          resultText = 'Wrong answer. Take a look at the frame colors and try again \n green = correct, yellow = wrong place, red = not in row'
        }
        this.gameUi.showMessage(resultText)
        this.gameBoard.updateBorderColors(result)
          this.updateNumberOfGuesses()
      }


    }
  }

  updateNumberOfGuesses(): void {
      const numberOfGuesses = this.computer?.getNumberOfGuesses()
      this.gameUi.showNumberOfGuesses(numberOfGuesses)   
  }
}


export default Game

