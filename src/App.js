import './App.css'

import { useState } from 'react'

// import Card from './components/CaruselReady/Card'
import Card from './components/Card/Card.jsx'

import { data } from './data'
import Paginator from './components/Paginator/Paginator'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'

function App() {
  const [index, setIndex] = useState(0)

  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1)
    }
  }

  const slideRight = () => {
    if (index + 1 <= data.length - 1) {
      setIndex(index + 1)
    }
  }

  const handlePageChange = (page) => {
    let n = page - index
    setIndex(index + n)
  }

  const handlePointerEvent = (e) => {
    let isTouchEvent = e.type === 'touchstart' ? true : false

    let card = e.target
    let offset = 0
    let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX

    document.onmousemove = onPointerMove
    document.onmouseup = onPointerEnd

    document.ontouchmove = onPointerMove
    document.ontouchend = onPointerEnd

    function onPointerMove(e) {
      offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX
      if (offset <= -100) {
        slideRight()
        if (index === data.length - 1) {
          card.style.left = 0
        } else {
          setTimeout(() => {
            card.style.left = 0
          }, 1000)
        }
        return
      }
      if (offset >= 100) {
        slideLeft()
        if (index === 0) {
          card.style.left = 0
        } else {
          setTimeout(() => {
            card.style.left = 0
          }, 1000)
        }
        return
      }
      card.style.left = offset + 'px'
    }

    function onPointerEnd(e) {
      if (offset < 0 && offset > -100) {
        card.style.left = 0
      }
      if (offset > 0 && offset < 100) {
        card.style.left = 0
      }
      document.onmousemove = null
      document.onmouseup = null

      document.ontouchmove = null
      document.ontouchend = null
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Profile />
        <div className="card-container">
          {data.map((card, n) => {
            let position =
              n > index ? 'nextCard' : n === index ? 'activeCard' : 'prevCard'
            return (
              <Card
                key={n}
                handlePointerEvent={handlePointerEvent}
                {...card}
                cardStyle={position}
              />
            )
          })}
          <Paginator
            dataLength={data.length}
            activeIndex={index}
            handlePageChange={handlePageChange}
          />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
