import '../css/styles.css'
import Computer from './computer'
import GameBoard from './game-board'
import Theme from './theme'

/**
 * Class that represents the game.
 */
class Game {
  private theme: Theme
  private gameArray : object [] = []
  private computer: object
  private gameBoard: object
  private answerButton?: HTMLButtonElement

  constructor() {

    this.theme = new Theme('flags')
    this.gameArray = this.theme.getItemArray()
    console.log(this.gameArray)

    this.computer = new Computer(5, this.gameArray)
    console.log(this.computer)

    this.gameBoard = new GameBoard(5, this.gameArray)

    console.log(this.computer)
    console.log(this.gameBoard)

    const answerButton = document.getElementById('answer-button')
    if (answerButton instanceof HTMLButtonElement) {
      this.answerButton = answerButton
    } else {
      console.log('The element is not a button')
    }

    if (this.answerButton) {
      this.answerButton.addEventListener('click', (event) => {
        event.preventDefault()
        const result = this.checkAnswer()
        console.log(result)
      })
    }
  }

  async checkAnswer() {
    console.log('in check answer method')
    const result = await this.computer.checkAnswer([{name : 'sweden'}, {name : 'uk'}, {name : 'japan'}, {name : 'china'}, {name : 'kenya'}])
    console.log(result)
    return result
  }

}

export default Game


