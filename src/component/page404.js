import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Page404 = () => {
    const nav = useNavigate();
  return (
    <div>
          <h2>This page not found!</h2>
          <button className='btn btn-dark mt-3' onClick={() => {
            nav(-1);
          }}>Back to list</button>
        </div>
  )
}
