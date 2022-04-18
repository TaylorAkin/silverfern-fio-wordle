import React, {useContext} from 'react'
import { AppContext } from '../App'

export const LetterCount = () => {

    const { setLetterCount } = useContext(AppContext);

    const letterCountHandler = (e) => {
        setLetterCount(parseInt(e.target.value));
    };

  return (
      <div className='word-length-container'>
        <div>Choose your word length (2-7 letters)</div>
        <input type="number" min="2" max="7" onSubmit={letterCountHandler} onKeyDown={letterCountHandler}></input>
      </div>
  )
}
