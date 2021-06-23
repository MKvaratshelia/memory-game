import React, { useState, useEffect } from 'react'
import { Image } from './Image'

export const Card = ({ card, flipped }) => {
  const { name, image } = card;

  const [flippedCard, setFlippedCard] = useState(false)
  const classes = flippedCard || flipped ? 'cards-list__card card is-flipped' : 'cards-list__card card'

  const handleClick = () => {
    setFlippedCard(prev => !prev)
  }

  useEffect(() => {
    if (flippedCard) {
      setTimeout(() => {
        setFlippedCard(false)
      }, 5000);
    }
  }, [flippedCard])

  return (
    <div onClick={handleClick} className={classes}>
      <Image image={image} alt={name} />
      <div className='card__face card__face_front'></div>
    </div>
  )
}