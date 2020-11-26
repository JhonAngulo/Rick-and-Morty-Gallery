import React from 'react'

function Character({ name, gender, species, image, origin }) {
  return (
    <div className='card-character'>
      <img className='card-character__img' src={image} alt={name} />
      <div className='card-character__details'>
        <h2 className='card-character__details-title'>{name}</h2>
        <p className='card-character__details-text'>
          <strong>Gender: </strong> {gender}
        </p>
        <p className='card-character__details-text'>
          {' '}
          <strong>Specie: </strong> {species}
        </p>
        <p className='card-character__details-text'>
          {' '}
          <strong>Origin: </strong> {origin.name}
        </p>
      </div>
    </div>
  )
}

export default Character
