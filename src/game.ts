import '../css/styles.css'
import GameBoard from './gameboard.ts'
import Theme from './theme.ts'
import Computer from './computer.ts'
import Item from './item.ts'

/**
 * Class that represents the game.
 */
class Game {
  private themeString: string = ''
  private themeObject: Theme | undefined
  private gameArray: Item[] = []
  private gameBoard: GameBoard | undefined
  private gameElement: HTMLElement
  private userMessage: HTMLElement
  private answerButton: HTMLButtonElement
  private numberOfItems: number = 3

  constructor() {
    this.gameElement = document.getElementById('game') as HTMLElement
    this.userMessage = document.getElementById('user-message') as HTMLElement
    this.answerButton = document.getElementById('answer-button') as HTMLButtonElement

    this.getUsername()
  }

  getUsername() {
    const usernameText = document.createElement('p')
    usernameText.textContent = 'Welcome! Enter your username and click on submit to begin!'
    const startButton = document.createElement('button')
    startButton.textContent = 'submit'
    const inputName = document.createElement('input')
    this.gameElement.appendChild(usernameText)
    this.gameElement.appendChild(startButton)
    this.gameElement.appendChild(inputName)


    startButton.addEventListener('click', (event) => {
      event.preventDefault()
      usernameText.textContent = ''
      inputName.style.display = 'none'
      this.getUsersChoosenTheme()
    })
  }

  getUsersChoosenTheme() {
    const theme = new Theme()
    const availableThemes = theme.getAvailableThemes()

    let themeButtons = []
    for (let i = 0; i < availableThemes.length; i++) {
      const themeButton = document.createElement('button')
      themeButton.textContent = `${availableThemes[i]}`
      themeButton.className = 'themeButton'
      themeButtons.push(themeButton)
      this.gameElement.appendChild(themeButton)
      themeButton.addEventListener('click', (event) => {
        event.preventDefault()
        const theme = themeButton.textContent
        if (theme) {
          this.themeString = theme
        }
        this.getUsersNumberOfItems()
      })
    }
  }

  getUsersNumberOfItems() {
    this.userMessage.textContent = 'How many bricks would you like to play with? Choose a number between 2 and 8.'
    const numberOfItemsInput = document.createElement('input')
    this.gameElement.appendChild(numberOfItemsInput)
    const submitNumberButton = document.createElement('button')
    submitNumberButton.textContent = 'start game'

    submitNumberButton.addEventListener('click', (event) => {
      if (numberOfItemsInput.value) {
        this.numberOfItems = parseInt(numberOfItemsInput.value)
      }
      this.createGame()
    })
  }

  createGame() {
    this.themeObject = new Theme(this.themeString)
    this.gameArray = this.themeObject.getItemArray()
    for (let i = 0; i < this.gameArray.length; i++) {
    }

    const computer = new Computer(this.numberOfItems, this.themeString)

    this.gameBoard = new GameBoard(this.numberOfItems, this.gameArray)
    console.log(this.gameBoard)
    this.answerButton.textContent = 'check answer'

    this.answerButton.addEventListener('click', (event) => {
      event.preventDefault()
      this.checkAnswer(computer)
    })
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

      const resultElement = document.getElementById('message')
      const resultText = document.createElement('p')
      let correctGuesses = 0
      for (let i = 0; i < result.length; i++) {
        if (result[i].getColor() === 'green') {
          correctGuesses++
        }
      }
      if (correctGuesses === this.numberOfItems) {
        resultText.textContent = 'Congratulations! You made it!'
      } else {
        resultText.textContent = 'Wrong answer. Take a look at the frame colors and try again \n green = correct, yellow = wrong place, red = not in row'
      }
      this.gameBoard.updateBorderColors(result)
      resultElement?.appendChild(resultText)
      if (resultElement) {
        this.updateNumberOfGuesses(computer, resultElement)
      }
    }
  }

  updateNumberOfGuesses(computer: Computer, resultElement?: HTMLElement): void {
    const numberOfGuessesElement = document.createElement('div')
    let numberOfGuesses = computer.getNumberOfGuesses()
    numberOfGuessesElement.textContent = numberOfGuesses.toString()

    resultElement?.appendChild(numberOfGuessesElement)
  }

}


export default Game

