import { FavoriteBorderRounded, FavoriteRounded } from '@mui/icons-material'
import React, { useState } from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'

function ProductCard({product}) {
  const navigation = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false)
  const toggleFavorite = () =>{
    setIsFavorite(!isFavorite);
    product.isFavorite = isFavorite;
  }
  
  return (
    <div className='productCard-container'>
      <div className="productCard">
        {/* <img src={product.image} alt="product" /> */}
        <button className="fav-icon" onClick={toggleFavorite}>
          {product.isFavorite ? <FavoriteRounded
            color='error' 
          /> : <FavoriteBorderRounded/>}
        </button>

        <div onClick={()=>{
        navigation('/productDetail', {state:product})
      }} className="productCard-image">

        </div>
      </div>
      <div className="productCard-bottom">
        <div className="pcbl">
          <span>{product.name}</span>
          <span>{product.description}</span>
          <div className="ratings">
            <StarRating totalStars={5} currentRatings={product.rating}/>
          </div>
          <button className='addToCart'>
            Add to Cart
          </button>
        </div>
        <div className="pcbr"></div>
      </div>
    </div>
  )
}

export default ProductCard


const StarRating = ({ totalStars = 5 , currentRatings = 0}) => {
  const [rating, setRating] = useState(currentRatings);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
      setRating(value);
  };

  return (
      <div style={{ display: 'flex', flexDirection: 'row', cursor: 'pointer' }}>
          {Array.from({ length: totalStars }, (_, index) => (
              <Star
                  key={index}
                  filled={index < (hover || rating)}
                  onClick={() => handleClick(index + 1)}
                  onMouseEnter={() => setHover(index + 1)}
                  onMouseLeave={() => setHover(0)}
              />
          ))}
      </div>
  );
};

const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
      <span
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{ fontSize: '1.2rem', color: filled ? 'gold' : 'gray' }}
      >
          ★
      </span>
  );
};
