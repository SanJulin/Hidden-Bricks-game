import { ComputerRow } from './computer-row.ts';

export class Computer {
    private computerRow: string[] = []
    private numberOfCharacters: number
    private answerWithFeedback: object[] = []

    constructor(numberOfCharacters = 5, themeArr: string[]) {
        this.numberOfCharacters = numberOfCharacters

        this.computerRow = this.createComputerRow(themeArr)
    }

    private createComputerRow(themeArr: string[]) {
        const computerRow = new ComputerRow(this.numberOfCharacters, themeArr)

        return computerRow.generateRow()
    }

    public checkAnswer(answer: string[]) {
        const answerFromPlayer = answer
        console.log(`Answer from player: ${answerFromPlayer}`)
        let correctCharacters = 0
        let result: any
        let signObject: object = { sign: String, comment: String }
        for (let i = 0; i < answerFromPlayer.length; i++) {
            if (answerFromPlayer[i] === this.computerRow[i]) {
                correctCharacters++
                signObject = { sign: answerFromPlayer[i], comment: 'correct place' }
            } else if (answerFromPlayer[i] !== this.computerRow[i] && this.computerRow.includes(answerFromPlayer[i])) {
                signObject = { sign: answerFromPlayer[i], comment: 'available, but in the wrong place' }
            } else {
                signObject = { sign: answerFromPlayer[i], comment: 'not available in the row' }
            }
            this.answerWithFeedback.push(signObject)
        }
        if (correctCharacters === this.numberOfCharacters) {
            result = 'Congratulations! You won! All the signs are in the correct place'
        }
        else {
            result = this.answerWithFeedback
        }
        return result
    }
}

