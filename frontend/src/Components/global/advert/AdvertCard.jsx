import React from 'react'
import './AdvertCard.css'
import advertImage from "../../../assets/images/Katy_Perry_turns_sexy_Santa_for_H_M-removebg-preview.png";

const AdvertCard = () => {
  return (
    <div className='advert-container'>
        <div className="advertWrapper">  
            <div className="advert-left">
                <p className="advertTitle">
                    Grab Up To 50% Off On Selected Product
                </p>
                <button type="button">Buy Now</button>
            </div>
            <div className="advert-right">
                <div className="advert-image">
                    <img src={advertImage} alt="advert" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdvertCard
