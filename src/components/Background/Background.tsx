import React, {useMemo} from "react"
import { motion } from "framer-motion";

import tiles from './tiles'

const cells = ['dark', 'medium', 'light']

const generateTile = () => {
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
      return color > 0 ? (
        <motion.rect
          x={xPosition * 10}
          y={yPosition * 10}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: (xPosition + yPosition) * 0.1
          }}
          rx ="3"
          width="10"
          height="10"
          className={`${cells[color]}`}
          key={`cell-${index}`}
        />
      ) : ''})}
      </svg>
  )
}

const Background = () => {
  const myTile = useMemo(generateTile, [])
  return (
    <div className="background">
      <div className="row">
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
      </div>
      <div className="row">
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
      </div>
      <div className="row">
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
      </div>
      <div className="row">
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
      </div>
      <div className="row">
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
      </div>
      <div className="row">
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
      </div>
      <div className="row">
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
      </div>
      <div className="row">
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
      </div>
      <div className="row">
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
        {myTile}
      </div>
    </div>
  )
}

export default Background