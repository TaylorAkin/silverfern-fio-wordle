import React, { useCallback, useContext, useEffect } from 'react';
import { Key } from './Key';
import { AppContext } from '../App';
import {
  keyRow1,
  keyRow2,
  keyRow3
} from '../Utils';

export const Keyboard = () => {
  const { onEnter, onDelete, onSelectLetter, disabledLetters } =  useContext(AppContext);

  const handleKeybaord = useCallback((event) => {
    if ( event.key === 'Enter') {
      onEnter();
    } else if (event.key === 'Backspace') {
      onDelete();
    } else {
      if (keyRow1.includes(event.key.toUpperCase())) {
        keyRow1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        })
      }
      else if (keyRow2.includes(event.key.toUpperCase())) {
        keyRow2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        })
      }
      else if (keyRow3.includes(event.key.toUpperCase())) {
        keyRow3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        })
      }
    }
  })

  useEffect(() => {
    document.addEventListener('keydown', handleKeybaord);

    return () => {
      document.removeEventListener('keydown', handleKeybaord);
    }
  }, [handleKeybaord])

  return (
    <div className='keyboard' onKeyDown={handleKeybaord}>
      <div className='line1'>
        {keyRow1.map((letter,index) => {
          return (
            <Key
              key={index}
              keyVal={letter}
              disabled={disabledLetters.includes(letter)}
            />
          )
        })}
      </div>
      <div className='line2'>
        {keyRow2.map((letter,index) => {
          return (
            <Key
              key={index}
              keyVal={letter}
              disabled={disabledLetters.includes(letter)}
            />
            )
        })}
      </div>
      <div className='line3'>
        <Key keyVal={"ENTER"} />
        {keyRow3.map((letter,index) => {
          return (
            <Key
              key={index}
              keyVal={letter}
              disabled={disabledLetters.includes(letter)}
            />
            )
        })}
        <Key keyVal={"DELETE"} />
      </div>
    </div>
  )
}
