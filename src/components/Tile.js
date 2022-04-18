import React, {useContext, useEffect} from 'react';
import { AppContext } from '../App';

export const Tile = ({attemptVal, letterPos}) => {
  const { board, correctWord, currAttempt, setDisabledLetters } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState = currAttempt.attempt > attemptVal && (
    correct ? "correct" : almost ? "almost" : "error"
  );

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((currState) => [...currState, letter])
    }
  }, [currAttempt.attempt, letter, correct, almost, setDisabledLetters]);

  return (
    <div className='letter' id={letterState ? letterState : undefined}>
        {letter}
    </div>
  )
}
