import React, {useContext} from 'react'
import { AppContext } from '../App'

export const EndGame = () => {
    const { endGame } = useContext(AppContext)
  return (
    <div>
        <h3>
            {endGame.guessedWord && "Congrats!"}
            {endGame.gameOver && !endGame.guessedWord  && "Good try!"}
        </h3>
    </div>
  )
}
