import '../css/styles.css'
import GameBoard from './gameboard.ts'
import Theme from './theme.ts'
import Computer from './computer.ts'

/**
 * Class that represents the game.
 */
class Game {
  private theme: Theme
  private gameArray : object [] = []
  private gameBoard: object
  private answerButton?: HTMLButtonElement

  constructor() {

    this.theme = new Theme('flags')
    this.gameArray = this.theme.getItemArray()
    console.log(this.gameArray)

    const computer = new Computer(5, this.gameArray)
    console.log(computer)

    this.gameBoard = new GameBoard(5, this.gameArray)

    console.log(computer)
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
        const result = this.checkAnswer(computer)
        console.log(result)
      })
    }
  }

  async checkAnswer(computer: Computer) {
    console.log('in check answer method')
    const result = await computer.checkAnswer([{name : 'sweden'}, {name : 'uk'}, {name : 'japan'}, {name : 'china'}, {name : 'kenya'}])
    console.log(result)
    return result
  }

}

export default Game

