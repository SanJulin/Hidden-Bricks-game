import '../css/styles.css'
import GameBoard from './gameboard.ts'
import Theme from './theme.ts'
import Computer from './computer.ts'
import Item from './item'

/**
 * Class that represents the game.
 */
class Game {
  private theme: string = ''
  private themeObject: Theme
  private gameArray : Item[] = []
  private gameBoard: GameBoard
  private answerButton?: HTMLButtonElement

  constructor() {
    this.theme = 'flags'
    this.themeObject = new Theme(this.theme)
    this.gameArray = this.themeObject.getItemArray()
    for (let i = 0; i < this.gameArray.length; i++) {
      console.log(`this gameArray: ${this.gameArray[i].getName()}`)
    }

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

