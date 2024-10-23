import '../css/styles.css'
import GameBoard from './Gameboard.ts'
import Computer from './Computer.ts'
import GameUi from './GameUi.ts'

/**
 * Class that represents the game.
 */
class Game {
  private themeString: string = ''
  private gameBoard: GameBoard | undefined
  private answerButton: HTMLButtonElement
  private numberOfItems: number | undefined
  private gameUi: GameUi = new GameUi()
  private username?: string
  private computer: Computer | undefined

  constructor() {
    this.answerButton = document.getElementById('answer-button') as HTMLButtonElement
    this.start()
  }

  async start() {
    this.username = await this.gameUi.getUsername()
    this.themeString = await this.gameUi.getChoosenTheme()
    this.numberOfItems = await this.gameUi.getNumberOfItems()
    this.createGame()
  }

  createGame() {

    if (this.numberOfItems && this.themeString) {
      this.computer = new Computer(this.numberOfItems, this.themeString)

      this.gameBoard = new GameBoard(this.numberOfItems, this.themeString)

      this.gameUi.showUserInstructions(this.numberOfItems)
      this.addAnswerButton()
    }
  }

  addAnswerButton() {
    this.answerButton.textContent = 'check answer'
    this.answerButton.style.display = 'block'

    this.answerButton.addEventListener('click', (event) => {
      this.checkAnswer()
    })
  }

  async checkAnswer() {

    if (this.gameBoard) {
      const answer = this.gameBoard.getPlayerAnswer()

      if (this.computer) {
        const resultArray = this.computer.checkAnswer(answer)


        let correctGuesses = 0
        for (let i = 0; i < resultArray.length; i++) {
          const resultIndex = i
          const color = resultArray[i].getColor()
          if (color === 'green') {
            correctGuesses++
          }

          this.gameBoard.updateBorderColors(resultIndex, color)
        }
        let resultText = ''
        if (correctGuesses === this.numberOfItems) {
          resultText = 'Congratulations! You made it!'
        } else {
          resultText = 'Wrong answer! Take a look at the frame colors and try again \n               green = correct, yellow = wrong place, red = not in row'
        }
        this.gameUi.showMessage(resultText)

        this.updateNumberOfGuesses()
      }
    }
  }

  updateNumberOfGuesses(): void {
    const numberOfGuesses = this.computer?.getNumberOfGuesses()
    this.gameUi.showNumberOfGuesses(numberOfGuesses, this.username)
  }
}

export default Game

