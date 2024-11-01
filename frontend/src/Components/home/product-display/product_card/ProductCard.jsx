import { FavoriteBorderRounded, FavoriteRounded } from '@mui/icons-material'
import React, { useContext, useState } from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../../context/CartProvider'
import { useSnackbar } from 'notistack'
import CartItem from '../../../../models/CartItem.ts'

function ProductCard({product}) {
  const {enqueueSnackbar} = useSnackbar()
  const {addToCart, isInCart} = useContext(CartContext);
  const navigation = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false)
  const toggleFavorite = () =>{
    setIsFavorite(!isFavorite);
    product.isFavorite = isFavorite;
  }

  const notify = () =>{
    enqueueSnackbar('Product Added To Cart', {
      variant: 'success',
      autoHideDuration: 2000,
    })
  }

  const cartAddHandler = (quantity, selectedColor) =>{
    // const newCartItem = {
    //   id:Date.now(),
    //   product,
    //   detail:{
    //       quantity,
    //       color:selectedColor
    //   }
    // }

    const newCartItem = new CartItem(
      Date.now(),
      product,
      {
        quantity,
        color:selectedColor
      }
    )

    if(!isInCart(newCartItem)){
      addToCart(newCartItem);
      notify();
    }
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
          <img  src={product?.image} alt="" />
        </div>
      </div>
      <div className="productCard-bottom">
        <div className="pcbl">
          <span>{product.name}</span>
          <span>{product.description}</span>
          <div className="ratings">
            <StarRating totalStars={5} currentRatings={product.rating}/>
          </div>
          <button onClick={cartAddHandler.bind(this, 1, 'Black')} className='addToCart'>
            Add to Cart
          </button>
        </div>
        <div className="pcbr">
          <p>${product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard


export const StarRating = ({ totalStars = 5 , currentRatings = 0}) => {
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

export const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => {
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
