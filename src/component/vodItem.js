import { useNavigate } from 'react-router-dom';

function VodItem(props) {
  let item = props.item;
  const clickButton = () => {
    nav(`info/?i=${item.imdbID}`)
  }
  let nav = useNavigate();
  return (
    <div className='col-md-4 border p-2'>
      <div className='border p-2 h-100 overflow-hidden shadow'>
        <img src={item.Poster} className='float-start me-2 w-25' alt="" />
        <h3>{item.Title}</h3>
        <div>Year: {item.Year}</div>
        <button onClick={clickButton} className='btn btn-dark'>More info</button>
      </div>
    </div>
  )
}

export default VodItem