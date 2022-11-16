import React from 'react'
import VodItem from './vodItem'

function VodList(props) {
  if (props.vod_ar) {
    return (
      <div className='container-fluid py-5'>
        <div className='container'>
          <h2>List of tv shows</h2>
          <div className='row'>
            {props.vod_ar.map(item => {
              return (
                <VodItem key={item.imdbID} item={item} />
              )
            })}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container-fluid py-5'>
        <div className='container'>
          <h2>List of tv shows</h2>
          <div className='row'>
            <h2>No movies found</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default VodList