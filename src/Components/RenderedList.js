import React from 'react';
import './RenderedList.css'

function RenderedList(props) { 

  const run = props.renderedImages.map((img) => {
    return (
      <a key={img.char_id} className='charecter' target='_blank' rel="noreferrer" href={`https://breakingbad.fandom.com/${img.name}`}>
        <div className='image'>
          <img src={img.img} alt='' />
        </div>
        <div className='info'>
          <p className='name'>{img.name}</p>
          <p style={{color: '#4BA771'}}>Nickname: {img.nickname}</p>
          {img.birthday === 'Unknown' ? <p>Opps! I forgot</p> : <p>{img.birthday}</p>}
        </div>
      </a>
    )
  })
  

  return (
    <div className='chars-wrapper'>
      {props.setIsLoading === true ? <h1>Loading...!</h1>: run}
    </div>
  )
}

export default RenderedList
