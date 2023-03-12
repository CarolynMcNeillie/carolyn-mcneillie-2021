import React from "react"

const cells = ['dark', 'medium', 'light']

const tiles = {
  daisy: {
    size: 13,
    pattern: [
      2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0,
      2, 0, 2, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0,
      2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
      0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 
      0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0,
      0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0,
      0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0,
      0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 2,
      0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 2, 0, 2,
      0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2,
    ]
  },
}

const Tile = () => {
  return (
      <>
      {tiles.daisy.pattern.map((color, index) => {
        console.log('index', index, 'div', Math.floor(index / tiles.daisy.size))
        const xPosition = index % tiles.daisy.size
        const yPosition = Math.floor(index / tiles.daisy.size)
      return (
        <rect
          x={xPosition * 10}
          y={yPosition * 10}
          // delay={xPosition + yPosition}
          width="10"
          height="10"
          className={`cell ${cells[color]}`} 
          key={`cell-${index}`}
        />
      )})}
      </>
  )
}

const Background = () => {
  const size = tiles.daisy.size * 10
  const backgroundImage = document.getElementById('title')
  return (
    <div className="background">
        <svg 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          version="1.1" xmlns="http://www.w3.org/2000/svg" 
          viewBox={`0 0 ${size} ${size}`}
          id="tile"
          >
          {/* <filter id="gooMe">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter> */}
          <Tile/>
        </svg>
    </div>
  )
}

export default Background