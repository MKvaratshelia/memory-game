import React, { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { shuffle } from './utils'
import { animals } from './constants'
import './App.scss'
// import penguin from './icons/penguin.png'
// import bear from './icons/bear.png'
// import rabbit from './icons/rabbit.png'
// import monkey from './icons/monkey.png'
// import shark from './icons/shark.png'
// import dog from './icons/dog.png'
// import cat from './icons/cat.png'
// import chick from './icons/chick.png'
// import tiger from './icons/tiger.png'
// import whale from './icons/whale.png'
// import frog from './icons/frog.png'
// import cow from './icons/cow.png'
// import turtle from './icons/turtle.png'
// import mouse from './icons/mouse.png'
// import sheep from './icons/sheep.png'
// import dolphin from './icons/dolphin.png'
// import duck from './icons/duck.png'
// import fish from './icons/fish.png'

// const cards = [
//   { id: 1, name: 'penguin', image: penguin },
//   { id: 2, name: 'penguin', image: penguin },
//   { id: 3, name: 'rabbit', image: rabbit },
//   { id: 4, name: 'rabbit', image: rabbit },
//   { id: 5, name: 'bear', image: bear },
//   { id: 6, name: 'bear', image: bear },
//   { id: 7, name: 'tiger', image: tiger },
//   { id: 8, name: 'tiger', image: tiger },
//   { id: 9, name: 'shark', image: shark },
//   { id: 10, name: 'shark', image: shark },
//   { id: 11, name: 'monkey', image: monkey },
//   { id: 12, name: 'monkey', image: monkey },
//   { id: 13, name: 'dog', image: dog },
//   { id: 14, name: 'dog', image: dog },
//   { id: 15, name: 'cat', image: cat },
//   { id: 16, name: 'cat', image: cat },
//   { id: 17, name: 'chick', image: chick },
//   { id: 18, name: 'chick', image: chick },
//   { id: 19, name: 'whale', image: whale },
//   { id: 20, name: 'frog', image: frog },
//   { id: 21, name: 'cow', image: cow },
//   { id: 22, name: 'turtle', image: turtle },
//   { id: 23, name: 'mouse', image: mouse },
//   { id: 24, name: 'sheep', image: sheep },
//   { id: 25, name: 'dolphin', image: dolphin },
//   { id: 26, name: 'duck', image: duck },
//   { id: 27, name: 'fish', image: fish },
//   { id: 28, name: 'whale', image: whale },
//   { id: 29, name: 'frog', image: frog },
//   { id: 30, name: 'cow', image: cow },
//   { id: 31, name: 'turtle', image: turtle },
//   { id: 32, name: 'mouse', image: mouse },
//   { id: 33, name: 'sheep', image: sheep },
//   { id: 34, name: 'dolphin', image: dolphin },
//   { id: 35, name: 'duck', image: duck },
//   { id: 36, name: 'fish', image: fish },
// ]

shuffle(animals)

function App() {

  const [flipped, setFlipped] = useState(true)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [activeButton, setActiveButton] = useState(false)
  const [cards, setCards] = useState(animals)

  useEffect(() => {
    setTimeout(() => {
      setFlipped(false)
    }, 10000);
  }, [flipped])

  const timerActive = () => {
    let timer = setInterval(() => {
      setSeconds(prevState => prevState + 1)
    }, 1000);
  }

  const handleClickButton = () => {
    timerActive()
    setActiveButton(prevState => !prevState)
  }

  if (seconds === 60) {
    setSeconds(0)
    setMinutes(prevState => prevState + 1)
  }

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
        {cards.map((card) => {
          return <Card card={card} key={card.id} flipped={flipped} />
        })}
      </div>
      {!flipped && <button disabled={activeButton} onClick={handleClickButton} className="app__button">Start</button>}
    </div>
  )
}

export default App
