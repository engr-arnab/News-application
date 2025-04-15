import React from 'react'
import './BigCard.css'

const BigCard = ({image, content,url}) => {
  
  
  return (
    
    <div onClick={() => window.open(url, '_blank')} className='BigCard'>
      
      <div className="BigCardImageBox">
        <img  src={image} alt="" />
      </div>
      <div className="BigCardInfoBox">
        <div className="BigCardInfoBoxText">
            {content}
        </div>
        <div className="BigCardInfoBoxSource">
           
        </div>
      </div>
    </div>
  )
}

export default BigCard
