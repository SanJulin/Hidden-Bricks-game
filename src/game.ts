import '../css/styles.css'
import GameBoard from './gameboard.ts'
import Computer from './computer.ts'
import GameUi from './game-ui.ts'
import Theme from './theme.ts'
import Item from 'item'

/**
 * Class that handles the game logic of the Hidden Bricks game. 
 * Is responsible for creating the computer opponent, gameboard and gameUi and the
 * communication between objects in the class. 
 */
class Game {
  private themeDescription: string = ''
  private themeObject: Theme
  private gameBoard!: GameBoard
  private answerButton: HTMLButtonElement
  private numberOfItems: number | undefined
  private gameUi: GameUi
  private username?: string
  private computer!: Computer

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
      try {
        this.themeObject.setTheme(this.themeDescription)
        this.computer = new Computer(this.numberOfItems, this.themeDescription) as Computer
  
        this.gameBoard = new GameBoard(this.numberOfItems, this.themeObject) as GameBoard
  
        this.gameUi.showUserInstructions(this.numberOfItems)
        this.addAnswerButton()
      } catch (error) {
        if (error instanceof Error) {
          this.gameUi.showMessage(error.message)
        }
      }
    }
  }

  addAnswerButton() {
    this.answerButton.textContent = 'check answer'
    this.answerButton.style.display = 'block'

    this.answerButton.addEventListener('click', (event) => {
      this.checkResultWithComputer()
    })
  }

  async checkResultWithComputer() {
    try {
      const answerFromPlayer = this.gameBoard.getPlayerAnswer()
      const resultArray = this.computer.getFeedBackFromComputer(answerFromPlayer)

      this.showResultToUser(resultArray)

    } catch (error) {
      if (error instanceof Error)
        this.gameUi.showMessage(error.message)
    }

  }

  showResultToUser(resultArray: Item[]) {
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
      resultText = 'Wrong answer! Take a look at the frame colors and try again! Green = Correct, Yellow = Wrong place, Red = Not in row'
    }
    this.gameUi.showMessage(resultText)

    this.updateNumberOfGuesses()
  }

  updateNumberOfGuesses(): void {
    const numberOfGuesses = this.computer?.getNumberOfGuesses()
    this.gameUi.showNumberOfGuesses(numberOfGuesses, this.username)
  }
}

export default Game

