export class ComputerRow {
    private numberOfCharacters: number
    private themeArr: string[]

    constructor(numberOfCharacters: number, themeArr: string []) {
        this.numberOfCharacters = numberOfCharacters
        this.themeArr = themeArr
    }

    public generateRow() {
        const rowLength = this.numberOfCharacters
        const newRow = []
        for (let i = 0; i < rowLength; i++) {
                const nextColorIndex = Math.floor(Math.random() * this.themeArr.length)
                const nextColor = this.themeArr[nextColorIndex]
                newRow.push(nextColor)
            }
        return newRow
    }

}