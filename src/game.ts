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

  /**
   * Starts the game and collects information from the player.
   */
  async start() {
    this.username = await this.gameUi.getUsername()
    const availableThemes = this.themeObject.getAvailableThemes()
    this.themeDescription = await this.gameUi.getChoosenTheme(availableThemes)
    this.numberOfItems = await this.gameUi.getNumberOfItems()
    this.createGame()
  }

  /**
   * Creates the game by creating a computer opponent and gameboard.
   */
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

  //Button to be used when the player would like to submit an answer. 
  addAnswerButton() {
    this.answerButton.textContent = 'check answer'
    this.answerButton.style.display = 'block'

    this.answerButton.addEventListener('click', (event) => {
      this.checkResultWithComputer()
    })
  }

  /**
   * Checks with the computer if the bricks in the guessed row are in the right place or not.
   */
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

  /**
   * Shows an array with Items that has a color connected to them depending on if the player dropped the bricks in the correct boxes or not. 
   * 
   * @param resultArray - an array with Items that has a color connected to them. 
   */
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

  /**
   * Updates the number of guesses that the player used.
   */
  updateNumberOfGuesses(): void {
    const numberOfGuesses = this.computer?.getNumberOfGuesses()
    this.gameUi.showNumberOfGuesses(numberOfGuesses, this.username)
  }
}

export default Game

