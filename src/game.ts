import '../css/styles.css'
import GameBoard from './gameboard.ts'
import Theme from './theme.ts'
import Computer from './computer.ts'
import Item from './item.ts'

/**
 * Class that represents the game.
 */
class Game {
  private theme: string = ''
  private themeObject: Theme | undefined
  private gameArray: Item[] = []
  private gameBoard: GameBoard | undefined
  private answerButton?: HTMLButtonElement

  constructor() {

    const usernameText = document.createElement('p')
    usernameText.textContent = 'Welcome! Enter your username and click on start to start the game!'
    const startButton = document.createElement('button')
    startButton.textContent = 'start'
    const inputName = document.createElement('input')
    const startElement = document.getElementById('start')
    startElement?.appendChild(usernameText)
    startElement?.appendChild(startButton)
    startElement?.appendChild(inputName)


    startButton.addEventListener('click', (event) => {
      event.preventDefault()
      this.createGame()
      usernameText.textContent = ''
      startButton.style.display = 'none'
      inputName.style.display = 'none'
    })
  }

  createGame() {
    this.theme = 'flags'
    this.themeObject = new Theme(this.theme)
    this.gameArray = this.themeObject.getItemArray()
    for (let i = 0; i < this.gameArray.length; i++) {
      console.log(`this gameArray: ${this.gameArray[i].getName()}`)
    }

    const computer = new Computer(3, this.theme)
    console.log(computer)

    this.gameBoard = new GameBoard(3, this.gameArray)

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
        this.checkAnswer(computer)

      })
    }

  }

  async checkAnswer(computer: Computer) {
    console.log('in check answer method')
    if (this.gameBoard) {
      const answer = this.gameBoard.getPlayerAnswer()
      console.log(answer)
      let answerCopy: Item[] = []
      for (let i = 0; i < answer.length; i++) {
        const item = new Item(i + 1, `${answer[i]}`)
        console.log(`item ${item}`)
        answerCopy.push(item)
      }
      console.log(`answercopy ${JSON.stringify(answerCopy)}`)
      const result = await computer.checkAnswer(answerCopy)
      console.log(result)
      if (result === 'Congratulations! You made it!') {
        const messageElement = document.getElementById('message')
        const message = document.createElement('p')
        message.textContent = result
        messageElement?.appendChild(message)
      } else {
        console.log('not correct')
        if (this.gameBoard) {
          console.log('gameb')
          this.gameBoard.updateBorderColors(result)
        }
      }

    }
  }


}

export default Game

