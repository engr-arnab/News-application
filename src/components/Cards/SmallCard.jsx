import React from 'react'
import './SmallCard.css'


const SmallCard = ({image, content,url}) => {
    return (
        <div onClick={() => window.open(url, '_blank')} className='SmallCard'>
            <div className="SmallCardImageBox">
                <img src={image} alt="" />
            </div>
            <div className="SmallCardInfoBox">
                <div className="SmallCardInfoBoxText">
                    {content}
                </div>
                
            </div>
        </div>
    )
}

export default SmallCard
