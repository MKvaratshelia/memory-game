import React from 'react'
import { Image } from './Image'

export const Card = ({ card, onClick, isFlipped, index, deleteCard }) => {
  const { name, image } = card;

  const classes = `cards-list__card card ${isFlipped ? 'is-flipped' : ''}`
  const deleteCardStyles = deleteCard ? { visibility: 'hidden', transition: '1s' } : null

  const handleClick = () => {
    onClick(index)
  }

  return (
    <div onClick={handleClick} className={classes} style={deleteCardStyles}>
      <Image image={image} alt={name} />
      <div className='card__face card__face_front'></div>
    </div>
  )
}