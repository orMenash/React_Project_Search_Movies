import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function VodInput() {
  const nav = useNavigate();
  const inputRef = useRef();

  const onKeybordClick = (e) => {
    if(e.key == "Enter"){
      onSearchClick();
    }
  }

const onSearchClick = () => {
 let val_input = inputRef.current.value
 nav(`?s=${val_input}`)
}

  return (
    <header className='container-fluid bg-dark p-2'>
      <div className='container'>
        <div className='row'>
          <div className='logo col-auto'>
            <h2 className='text-white'>My V.O.D</h2>
          </div>
          <nav className='d-flex col-md-4'>
            <input onKeyDown={onKeybordClick} ref={inputRef} placeholder='search...' type="search" className='form-control' />
            <button  onClick={onSearchClick} className='btn btn-warning'>Search</button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default VodInput