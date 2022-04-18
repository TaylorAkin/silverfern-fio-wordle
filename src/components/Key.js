import React, { useContext } from 'react'
import { AppContext } from '../App'

export const Key = ({ keyVal, disabled }) => {
  const { onDelete, onSelectLetter, onEnter } = useContext(AppContext)

  const selectLetter = () => {
    if (keyVal === 'ENTER') {
      onEnter();
    }
    else if (keyVal === 'DELETE') {
      onDelete();
    }
    else {
      onSelectLetter(keyVal);
    }
  }
  return (
    <div className='key' onClick={selectLetter} id={disabled ? "disabled" : "false"}>{ keyVal }</div>
  )
}
