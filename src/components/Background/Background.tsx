import React from "react"
import { motion } from "framer-motion";

import tiles from './tiles'

const cells = ['dark', 'medium', 'light']

const Tile = () => {
  const size = tiles[0].size * 10
  return (
    <svg 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      version="1.1" xmlns="http://www.w3.org/2000/svg" 
      viewBox={`0 0 ${size} ${size}`}
      className="tile"
      >
      {tiles[0].pattern.map((color, index) => {
        const xPosition = index % tiles[0].size
        const yPosition = Math.floor(index / tiles[0].size)
      return (
        <rect
          x={xPosition * 10}
          y={yPosition * 10}
          data-delay={xPosition + yPosition}
          rx ="3"
          width="10"
          height="10"
          className={cells[color]} 
          key={`cell-${index}`}
        />
      )})}
      </svg>
  )
}

const Background = () => {
  return (
    <div className="background">
      <Tile/><Tile/><Tile/><Tile/><Tile/><Tile/><Tile/>
      <Tile/><Tile/><Tile/><Tile/><Tile/><Tile/><Tile/>
      <Tile/><Tile/><Tile/><Tile/><Tile/><Tile/><Tile/>
      <Tile/><Tile/><Tile/><Tile/><Tile/><Tile/><Tile/>
      <Tile/><Tile/><Tile/><Tile/><Tile/><Tile/><Tile/>
      <Tile/><Tile/><Tile/><Tile/><Tile/><Tile/><Tile/>
      <Tile/><Tile/><Tile/><Tile/><Tile/><Tile/><Tile/>
    </div>
  )
}

export default Background