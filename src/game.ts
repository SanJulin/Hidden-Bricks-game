import '../css/styles.css'
import GameBoard from './gameboard.ts'
import Computer from './computer.ts'
import GameUi from './game-ui.ts'
import Theme from './theme.ts'

/**
 * Class that represents the game.
 */
class Game {
  private themeDescription: string = ''
  private themeObject: Theme 
  private gameBoard: GameBoard | undefined
  private answerButton: HTMLButtonElement
  private numberOfItems: number | undefined
  private gameUi: GameUi
  private username?: string
  private computer: Computer | undefined

  constructor() {
    this.gameUi = new GameUi()
    this.themeObject = new Theme()
    this.answerButton = document.getElementById('answer-button') as HTMLButtonElement
    
    this.start()
  }

  async start() {
    this.username = await this.gameUi.getUsername()
    const availableThemes = this.themeObject.getAvailableThemes()
    this.themeDescription = await this.gameUi.getChoosenTheme(availableThemes)
    this.numberOfItems = await this.gameUi.getNumberOfItems()
    this.createGame()
  }

  createGame() {

    if (this.numberOfItems && this.themeDescription) {
      this.themeObject.setTheme(this.themeDescription)
      this.computer = new Computer(this.numberOfItems, this.themeDescription)

      this.gameBoard = new GameBoard(this.numberOfItems, this.themeObject)

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

