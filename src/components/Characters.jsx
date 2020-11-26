import React, { useState, useEffect } from 'react'
import Character from './Character'

function Characters() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
  }, [])

  return (
    <div className='container-characters'>
      {characters.map((item) => (
        <Character key={item.id} {...item} />
      ))}
    </div>
  )
}

export default Characters
