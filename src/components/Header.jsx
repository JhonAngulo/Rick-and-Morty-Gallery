import React, { useState } from 'react'

function Header() {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className='header'>
      <h1 className='header__title'>Rick and Morty</h1>
      <button className='header__button' type='button' onClick={handleClick}>
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default Header
