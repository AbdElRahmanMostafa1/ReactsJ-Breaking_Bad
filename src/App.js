import React, { useState, useEffect } from 'react';
import './App.css';
import BreakingBadApi from './Components/BreakingBadApi';
import RenderedList from './Components/RenderedList'

function App() {
  const [charecter, setCharecter] = useState('');
  const [isLoading, setIsLoading] = useState(true)
  const [renderedImages, setRenderedImages] = useState([]);

  const onInputChange = (event) => {
    setCharecter(event.target.value);
  }

  useEffect(()=> {
    const timeoutResponce = setTimeout(() => {
      const fetchItems = async (charecter) => {
        const responce = await BreakingBadApi.get(
          'characters',
          {
            params: {
              name: charecter
            }
          }
          )
        setRenderedImages(responce.data);
        console.log(responce.data);
      }
      setIsLoading(false)
      fetchItems(charecter);
    }, 500)

  return (() => {
    clearTimeout(timeoutResponce);
  })
  }, [charecter]);

  const cond = renderedImages.length === 0 ? <p style={{width: '80%', margin: '2rem auto', padding: '1rem', color: 'white', background: 'green', textAlign: 'center', fontSize: '2rem', borderRadius: '1rem'}}>Ouch! No charecter by this name🙂</p> : <RenderedList renderedImages={renderedImages} setIsLoading={setIsLoading} />

  return (
    <main>
      <div className='header-input'>
        <img src='https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png' alt='Breaking Bad Logo' />
        <input 
          type='text'
          placeholder='Type to search for a charecter!'
          value={charecter}
          onChange={onInputChange}
        />
      </div>
      {cond}
      {/* <RenderedList renderedImages={renderedImages} /> */}
    </main>
  )
}

export default App;