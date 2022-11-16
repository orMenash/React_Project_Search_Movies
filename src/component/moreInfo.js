import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const MoreInfo = () => {

  const [querys] = useSearchParams();
  const [item, setItem] = useState([]);
  const nav = useNavigate();
  useEffect(() => {

    doApi();

  }, [])

  const doApi = async () => {
    let myUrl = `https://www.omdbapi.com/?i=${querys.get("i")}&apikey=16387642`
    let resp = await fetch(myUrl);
    let data = await resp.json();
    await setItem(data);

  }

  return (
    <div className='container p-2 text-center'>
      <img src={item.Poster} alt="" className='col-md-2' />
      <h2>Move name: {item.Title}</h2>
      <div>Run time: {item.Rumtime}</div>
      <div>Rating: {item.imdbRating}</div>
      <div>Genere: {item.Genre}</div>
      <div className='col-md-5 mx-auto'>Plot: {item.Plot}</div>
      <button className='btn btn-dark mt-3' onClick={() => {
        nav(-1);
      }}>Back to list</button>
    </div>
  )
}
