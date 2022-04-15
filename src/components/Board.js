import React, {useState} from 'react';
import { boardDefault } from '../Words';
import { Letter } from './Letter';

export const Board = () => {
  const [board, setBoard] = useState(boardDefault);
  console.log('baord', board);
  return (
    <>
    <div>Board</div>
    <div className='board-container'>
      {board.map((row, index) => (
        <div
          key={index}
          className='row'
        >
          {row.map((letter, index) => (
            <Letter
              key={index}
              letterPos={index}
              attemptVal={row}
            />
      ))}
        </div>
      ))}
    </div>
    </>
  )
}

export default Board