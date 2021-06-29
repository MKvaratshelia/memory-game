import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setButtonActive, setFlippedCards, clearFlippedCards, setMatched, setFlippedOff } from "./store/actions"
import { Card } from './components/Card'
import { shuffle } from './utils'
import { animals } from './constants'
import './App.scss'

shuffle(animals)

function App() {
  const cards = animals
  const dispatch = useDispatch()
  const store = useSelector((state) => state)
  const { buttonActive, flippedCards, matched, flippedOff } = store

  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  const timer = () => setSeconds(prev => prev + 1)

  const startTimer = () => window.timerId = setInterval(timer, 1000)

  const stopTimer = () => clearInterval(window.timerId)

  const handleClickButton = () => {
    startTimer()
    dispatch(setButtonActive(true))
  }

  const onFlippedCards = (id) => dispatch(setFlippedCards(id))

  if (seconds === 60) {
    setMinutes(prev => prev + 1)
    setSeconds(0)
  }

  if (matched.length === 18) stopTimer()


  useEffect(() => {
    if (flippedCards.length < 2) return

    const firstCard = cards[flippedCards[0]]
    const secondCard = cards[flippedCards[1]]

    if (secondCard.name && firstCard.name === secondCard.name) {
      dispatch(setMatched(firstCard.name))
    }

    if (flippedCards.length === 2) {
      setTimeout(() => {
        dispatch(clearFlippedCards())
        dispatch(setFlippedOff(true))
      }, 5000);
      dispatch(setFlippedOff(false))
    }

  }, [flippedCards, cards, dispatch])

  return (
    <div className='app'>
      <header className='app__header header'>
        <h2 className='header__title'>Timer:</h2>
        <span className="header__timer">{`${minutes}m ${seconds}s`}</span>
      </header>
      <div className='app__card-list cards-list'>
        {cards.map((card, index) => {
          let isFlipped = false
          let deleteCard = false

          if (flippedCards.includes(index)) { isFlipped = true }
          if (matched.includes(card.name)) {
            isFlipped = true
            deleteCard = true
          }

          return (
            <Card
              card={card}
              index={index}
              key={card.id}
              onClick={flippedOff ? onFlippedCards : () => { }}
              isFlipped={isFlipped}
              deleteCard={deleteCard} />
          )
        })}
      </div>
      <button disabled={buttonActive} onClick={handleClickButton} className="app__button">Start</button>
    </div>
  )
}

export default App
