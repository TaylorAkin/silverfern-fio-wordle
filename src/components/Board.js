import { useContext } from 'react';
import { Tile } from './Tile';
import { AppContext } from '../App';


export const Board = () => {
  const { letterCount } =  useContext(AppContext);

  const generateTiles = (attemptVal) => {
    const tiles = [];
    for (var i = 0; i < letterCount; i++) {
      tiles.push(
        <Tile
          key={i}
          letterPos={i}
          attemptVal={attemptVal}
        />
      );
    }
    return tiles;
  }

  return (
    <div className='board-container'>
      <div className='row'>
        { generateTiles(0) }
      </div>
      <div className='row'>
        { generateTiles(1) }
      </div>
      <div className='row'>
        { generateTiles(2) }
      </div>
      <div className='row'>
        { generateTiles(3) }
      </div>
      <div className='row'>
        { generateTiles(4) }
      </div>
      <div className='row'>
        { generateTiles(5) }
      </div>
    </div>
  )
}
