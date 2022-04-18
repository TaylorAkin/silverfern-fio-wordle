import { createContext, useEffect, useState } from 'react';

import { Board } from './components/Board';
import { Keyboard } from './components/Keyboard';
import { EndGame } from './components/EndGame';
import { LetterCount } from './components/LetterCount';
import {
  boardDefault2,
  boardDefault3,
  boardDefault4,
  boardDefault5,
  boardDefault6,
  boardDefault7,
  generateWordSet,
} from './Words';
import './main.css';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault5);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPos: 0
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [endGame, setEndGame] = useState({
    gameOver: false,
    guessedWord: false
  });
  const [letterCount, setLetterCount] = useState(0);
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
    })

    if (letterCount === 2) {
      setBoard(boardDefault2);
      setCorrectWord("BE");
    }
    else if (letterCount === 3) {
      setBoard(boardDefault3);
      setCorrectWord("TWO");
    }
    else if (letterCount === 4) {
      setBoard(boardDefault4);
      setCorrectWord("HAWK");
    }
    else if (letterCount === 5) {
      setBoard(boardDefault5);
      setCorrectWord("SPACE");
    }
    else if (letterCount === 6) {
      setBoard(boardDefault6);
      setCorrectWord("BROKEN");
    }
    else if (letterCount === 7) {
      setBoard(boardDefault7);
      setCorrectWord("WEANING");
    }
  }, [letterCount]);

  const onEnter = () => {
    if (currAttempt.letterPos !== letterCount) return;
    let currWord = "";

    for (let i=0; i < letterCount; i++) {
      currWord += board[currAttempt.attempt][i]
    }

    if (wordSet.has(currWord.toLowerCase()) && currWord.length === letterCount) {
      setCurrAttempt({
        attempt: currAttempt.attempt + 1,
        letterPos: 0
      })
    } else {
      return false;
    }

    if (currWord === correctWord) {
      setEndGame({
        gameOver: true,
        guessedWord: true
      });
    }

    if (currAttempt.attempt === 5) {
      setEndGame({
        gameOver: true,
        guessedWord: false
      });
    }
  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
  }

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > (letterCount - 1)) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos + 1});
  }

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onEnter,
          onDelete,
          onSelectLetter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          setEndGame,
          endGame,
          setLetterCount,
          letterCount
        }}
      >
        { !letterCount > 0 && <LetterCount /> }
        { endGame.gameOver && <EndGame /> }
        { !endGame.gameOver && letterCount > 0 && (
          <>
            <Board />
            <Keyboard />
          </>
        )}
      </AppContext.Provider>
    </div>
  );
}

export default App;
