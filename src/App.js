import React, { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { shuffle } from './utils'
import { animals } from './constants'
import './App.scss'

shuffle(animals)

function App() {

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [activeButton, setActiveButton] = useState(false)
  const [cards, setCards] = useState(animals)
  const [flippedCards, setFlippedCards] = useState([])
  const [matched, setMatched] = useState([])

  const timerActive = () => {
    let timer = setInterval(() => {
      setSeconds(prevState => prevState + 1)
    }, 1000);
  }

  const handleClickButton = () => {
    timerActive()
    setActiveButton(prevState => !prevState)
  }

  const onFlippedCards = (id) => {
    setFlippedCards((prev) => [...prev, id])
  }

  if (seconds === 60) {
    setSeconds(0)
    setMinutes(prevState => prevState + 1)
  }

  useEffect(() => {
    if (flippedCards.length < 2) return

    const firstCard = cards[flippedCards[0]]
    const secondCard = cards[flippedCards[1]]

    console.log(firstCard.name, secondCard.name)

    if (secondCard && firstCard.name === secondCard.name) {
      setMatched([...matched, firstCard.name])
    }

    if (flippedCards.length === 2) setTimeout(() => setFlippedCards([]), 5000);

  }, [flippedCards])

  return (
    <div className='app'>
      <header className='app__header header'>
        {activeButton
          &&
          <>
            <h2 className='header__title'>Timer:</h2>
            <span className="header__timer">{`${minutes}m ${seconds}s`}</span>
          </>
        }
      </header>
      <div className='app__card-list cards-list'>
        {cards.map((card, index) => {
          let isFlipped = false
          let deleteCard = false

          if (flippedCards.includes(index)) isFlipped = true
          if (matched.includes(card.name)) {
            isFlipped = true
            deleteCard = true
          }

          return <Card card={card} index={index} key={card.id} onClick={onFlippedCards} isFlipped={isFlipped} deleteCard={deleteCard} />
        })}
      </div>
      <button disabled={activeButton} onClick={handleClickButton} className="app__button">Start</button>
    </div>
  )
}

export default App
