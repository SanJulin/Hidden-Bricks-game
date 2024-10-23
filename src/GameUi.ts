import Theme from './Theme.ts'

class GameUi {
  private textMessage: HTMLElement
  private userMessageElement: HTMLDivElement
  private resultText: HTMLDivElement
  private numberOfGuessesElement: HTMLDivElement

  constructor() {
    this.textMessage = document.getElementById('text-message') as HTMLElement
    this.userMessageElement = document.getElementById('user-message-element') as HTMLDivElement
    this.resultText = document.getElementById('result-element') as HTMLDivElement
    this.numberOfGuessesElement = document.getElementById('number-of-guesses') as HTMLDivElement
  }

  getUsername(): Promise<string> {
    return new Promise((resolve) => {
      const inputName = document.createElement('input')
      const startButton = document.createElement('button')
      startButton.textContent = 'Submit'
      this.textMessage.textContent = 'Welcome! Enter your username and click on submit to begin!'
      this.userMessageElement.appendChild(startButton)
      this.userMessageElement.appendChild(inputName)
      startButton.addEventListener('click', () => {
        const username = inputName.value
        this.textMessage.textContent = ''
        inputName.style.display = 'none'
        startButton.removeEventListener
        startButton.style.display = 'none'
        resolve(username)
      })
    })
  }

  getChoosenTheme(): Promise<string> {
    return new Promise((resolve) => {
      const theme = new Theme()
      const availableThemes = theme.getAvailableThemes()

      this.textMessage.textContent = 'Choose a theme for the game!'
      let themeButtons = []
      for (let i = 0; i < availableThemes.length; i++) {
        const themeButton = document.createElement('button')
        themeButton.textContent = `${availableThemes[i]}`
        themeButtons.push(themeButton)
        this.userMessageElement.appendChild(themeButton)
        themeButton.addEventListener('click', (event) => {
          const choosenTheme = themeButton.textContent
          for (let i = 0; i < themeButtons.length; i++) {
            themeButtons[i].remove()
          }
          if (choosenTheme) {
            resolve(choosenTheme)
          }
        })
      }
    })
  }

  getNumberOfItems(): Promise<number> {
    return new Promise((resolve) => {
      this.textMessage.textContent = 'How many bricks would you like to play with? Choose a number between 2 and 8.'
      const numberOfItemsInput = document.createElement('input')
      this.userMessageElement.appendChild(numberOfItemsInput)
      const submitNumberButton = document.createElement('button')
      submitNumberButton.textContent = 'start game'
      this.userMessageElement.appendChild(submitNumberButton)

      submitNumberButton.addEventListener('click', (event) => {
        if (numberOfItemsInput.value) {
          const numberOfItems = parseInt(numberOfItemsInput.value)
          submitNumberButton.style.display = 'none'
          numberOfItemsInput.style.display = 'none'
          this.textMessage.textContent = ''
          resolve(numberOfItems)
        }
      })
    })
  }

  showUserInstructions(numberOfItems: number) {
    this.textMessage.textContent = `Guess which ${numberOfItems} items that should be in the computer row by dropping the pictures in the above row and click on check answer!`
  }

  showMessage(resultText: string) {
    this.resultText.textContent = resultText
  }

  showNumberOfGuesses(numberOfGuesses: number | undefined, username: string | undefined) {
    this.numberOfGuessesElement.textContent = `Player ${username} has guessed \n${numberOfGuesses?.toString()} times.`
  }
}
export default GameUi