import React from 'react'
import './DetailCard.css'

function DetailCard({image}) {
  return (
    <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }} onClick={()=>{}} className='detailCardContainer'>
      <img style={
          {
              height:'80%'
          }
      } src={image} alt={'image'}/>
    </div>
  )
}

export default DetailCard
