import Computer from '../src/computer'
import Theme from '../src/theme'

/**
 * Automatic test program that shows how it could look like when the AI player plays against the computer. 
 */

// Creates a new Theme
const theme = new Theme()

// Gets the available themes
const themes = theme.getAvailableThemes()

// Generates a random theme based on the available themes.
const themeIndex = Math.floor(Math.random() * themes.length)
const randomTheme = themes[themeIndex]

// Sets a theme based on the random generated theme.
theme.setTheme(randomTheme)

// Gets the array with items that belongs to the theme.
const itemArray = theme.getItemArray()

// Generates a random number
const numberOfItems = Math.ceil(Math.random() * 8)

// Creates a computer opponent
const computer = new Computer(numberOfItems, itemArray)

console.log(computer)

let gameContinues: boolean = true

while (gameContinues === true) {

    for (let i = 0; i < itemArray.length; i++) {
        console.log(`Item options: ${JSON.stringify(itemArray[i])}`)
    }

    // Creates an array with the items that the AI has choosen.
    let answer : object [] = []
    for (let i = 0; i < numberOfItems; i++) {
        const guessIndex = Math.floor(Math.random() * itemArray.length)
        const guess = itemArray[guessIndex]
        answer.push(guess)
    }
    
    console.log(`Answer from user: ${JSON.stringify(answer)}`)

    //Checks with the computer if the answer is correct.
    let result = computer.checkAnswer(answer)
    let parsedResult = JSON.parse(result)

    // Checks how many guesses the AI has used. 
    const numberOfGuesses = computer.getNumberOfGuesses()

    // Checks if the user has won and prints the resulttext and number of guesses needed if the user won. 
    // Prints the item + color. Green = correct place. Yellow = wrong place. Red = does not occur in the row.
    if (parsedResult === 'Congratulations! You made it!') {
        console.log(`${parsedResult} Total number of guesses: ${numberOfGuesses}`)
        gameContinues = false
    } else {
        for (let i = 0; i < parsedResult.length; i++) {
            console.log(parsedResult[i])
        }
    }

    // Ends the game if the AI has used 40 guesses.
    if (numberOfGuesses === 40) {
        console.log(`You have unfortunately reached the maximum number of guesses. (${numberOfGuesses} guesses)`)
        gameContinues = false
    }
}