import './style.css'
import { GameBoard } from './game-board.ts'

export class Game {

  constructor() {

    const gameBoard = new GameBoard(['sweden', 'japan', 'italy', 'norway', 'germany', 'china', 'usa', 'uk'])

    console.log(gameBoard)
  }

}



