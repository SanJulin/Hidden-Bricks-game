
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

  /**
   * Get the username from the player.
   *
   * @returns - the username chosen by the player. 
   */
  getUsername(): Promise<string> {
    return new Promise((resolve) => {
      const inputName = document.createElement('input')
      const startButton = document.createElement('button')
      startButton.textContent = 'Submit'
      this.textMessage.textContent = 'Welcome! Enter your username and click on submit to begin!'
      this.userMessageElement.appendChild(inputName)
      this.userMessageElement.appendChild(startButton)
      startButton.addEventListener('click', () => {
        try {
          const username = inputName.value
          const validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z', 'å','ä', 'ö']
          for (let i = 0; i < username.length; i++) {
            if (!validLetters.includes(username[i].toLowerCase())) {
              throw new Error('Only letters are allowed')
            }
          }
     
          if (username.length > 20 || username.length < 2)  {
            throw new Error('Pls enter a username with 2 - 20 letters')
          } else {
          this.textMessage.textContent = ''
          inputName.style.display = 'none'
          startButton.style.display = 'none'
          resolve(username)
          }
        } catch (error) {
          if (error instanceof Error) {
            this.showMessage(error.message)
          }
        }
      })
    })
  }

    /**
   * Get the theme from the player.
   *
   * @returns - the theme chosen by the player. 
   */
  getChoosenTheme(availableThemes: string[]): Promise<string> {
    return new Promise((resolve) => {
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

    /**
   * Get the number of items from the player.
   *
   * @returns - the number of items chosen by the player. 
   */
  getNumberOfItems(): Promise<number> {
    return new Promise((resolve) => {
      this.textMessage.textContent = 'How many bricks would you like to play with? Choose a number between 2 and 8.'
      const numberOfItemsInput = document.createElement('input')
      this.userMessageElement.appendChild(numberOfItemsInput)
      const submitNumberButton = document.createElement('button')
      submitNumberButton.textContent = 'start game'
      this.userMessageElement.appendChild(submitNumberButton)

      submitNumberButton.addEventListener('click', (event) => {
        try {
          if (numberOfItemsInput.value.length > 1) {
            throw new Error('Pls enter a number between 2 - 8')
          }
          const numberOfItems = parseInt(numberOfItemsInput.value)
          if (numberOfItems > 1 && numberOfItems < 9) {
            submitNumberButton.style.display = 'none'
            numberOfItemsInput.style.display = 'none'
            this.textMessage.textContent = ''
            resolve(numberOfItems)
          } else {
            throw new Error('Pls enter a number between 2 - 8')
          }
        } catch (error) {
          if (error instanceof Error) {
            this.showMessage(error.message)
          }
        }

      })
    })
  }

  /**
   * Shows instructions to the player
   * 
   * @param numberOfItems - number of items
   */
  showUserInstructions(numberOfItems: number) {
    this.textMessage.textContent = `Guess which ${numberOfItems} items that should be in the computer row by dropping the pictures in the above row and click on check answer!`
  }

  /**
   * Shows different kind of messages to the player
   * @param resultText 
   */
  showMessage(resultText: string) {
    this.resultText.textContent = resultText
  }

  /**
   * Shows number of guesses that the player has used. 
   * 
   * @param numberOfGuesses - number of guesses that the user used.
   * @param username - the players username
   */
  showNumberOfGuesses(numberOfGuesses: number | undefined, username: string | undefined) {
    this.numberOfGuessesElement.textContent = `Player ${username} has guessed \n${numberOfGuesses?.toString()} times.`
  }
}
export default GameUi