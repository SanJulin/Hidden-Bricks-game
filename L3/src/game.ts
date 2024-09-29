import './style.css'
import { Computer } from './computer'
import { GameBoard } from './game-board'
import { Theme } from './theme'

export class Game {
  private theme: Theme
  private gameArray : string [] = []
  private computer: Computer
  private gameBoard: GameBoard
  private answerButton?: HTMLButtonElement

  constructor() {

    this.theme = new Theme('flags')
    this.gameArray = this.theme.getArr()
    console.log(this.gameArray)

    this.computer = new Computer(5, this.gameArray)

    this.gameBoard = new GameBoard(['sweden', 'japan', 'italy', 'norway', 'kenya', 'china', 'brazil', 'uk'])

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
    const result = await this.computer.checkAnswer(['sweden', 'japan', 'italy', 'norway', 'kenya'])
    console.log(result)
    return result
  }


}



