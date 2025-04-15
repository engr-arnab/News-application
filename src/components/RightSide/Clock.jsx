import React from 'react'
import './Clock.css'
import { useState } from 'react'


const Clock = () => {

    const time = new Date().toLocaleTimeString()

    const [ctime, setCtime] = useState(time)
  
    const updateTime = () => {
      setCtime(new Date().toLocaleTimeString())
    }
  
    setTimeout(updateTime, 1000)
  return (
    <div className='Clock'>
      <h1>{ctime}</h1>
    </div>
  )
}

export default Clock
