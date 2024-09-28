import './style.css'
import { Computer } from './computer'
import { GameBoard } from './game-board.ts'

export class Game {

  constructor() {

    const computer = new Computer(5, ['sweden', 'japan', 'italy', 'norway', 'kenya', 'china', 'brazil', 'uk'])

    const gameBoard = new GameBoard(['sweden', 'japan', 'italy', 'norway', 'kenya', 'china', 'brazil', 'uk'])

    console.log(computer)
    console.log(gameBoard)
  }

  


}



