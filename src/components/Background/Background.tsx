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
    <div className="tile">
      {tiles.daisy.pattern.map((color) => (
        <div 
          className={`cell ${cells[color]}`} 
        />
      ))}
    </div>
  )
}

const Background = () => {
  return (
    <div className="background">
        <svg 
          xmlnsXlink="http://www.w3.org/1999/xlink" 
          version="1.1" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1000 1000">
          <filter id="gooMe">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
              <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </svg>
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
        <Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile /><Tile />
    </div>
  )
}

export default Background