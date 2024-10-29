import React, { useContext, useState } from 'react'
import './ProductDetail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../../Components/global/navigation/Navigation';
import DetailCard from '../../Components/product-detail/detail-card/DetailCard';
import { StarRating } from '../../Components/home/product-display/product_card/ProductCard';
import DetailColorOption from '../../Components/product-detail/detail-color-option/DetailColorOption';
import { Add, Remove } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import { CartContext } from '../../context/CartProvider';
import CartItem from '../../models/CartItem.ts';

function ProductDetail() {
    const {enqueueSnackbar} = useSnackbar();
    const {addToCart, isInCart} = useContext(CartContext);
    const location = useLocation();
    const product = location.state;
    const navigate = useNavigate();
    console.log('product id: ', product.id)
    const color_options = [
        ['#E3544C', '#F5C1BE', 'Pink'],
        ['#D2D3D4','#3C3D3A', 'Black'],
        ['#8DA89F','#D2D3D4', 'Green'],
        ['#30506C','#C1CBD3', 'Blue']
    ];

    

    const [selectedColor, setSelectedColor] = useState(0);
    const colorChangeHandler = (index) =>{
        setSelectedColor(index);
    }

    const [numberOfItems, setNumberOfItems] = useState(1);

    const incrementItems = () =>{
        setNumberOfItems((items) => items+=1);
        console.log(numberOfItems)
    }

    const decrementItems = () =>{
        if(numberOfItems > 1)
        {
            setNumberOfItems((items) => items-=1);
        }
        console.log(numberOfItems)
    }

    const notify = () =>{
        enqueueSnackbar('Product Added To Cart', {
          variant: 'success',
          autoHideDuration: 2000,
        })
      }
    
      const cartAddHandler = (quantity, selectedColor) =>{
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

    const buyNowHandler = () =>{
        navigate('/checkout', {
            state:{
                product,
                detail:{
                    quantity:numberOfItems,
                    color:color_options[selectedColor][2]
                }
            }
        }
        )
    }
    console.log(product)
  return (
    <div className='productDetailContainer'>
        <div className="header">
                <Navigation/>
                <hr/>
        </div>
        <div className="content">
            <div className="firstDetailSection">
                <div className="leftSide">
                    <div className="productImage">
                        <img  src={product?.image ?? ''} alt="" />
                    </div>
                    <div className="optionsContainer">
                        <DetailCard image={product.image}/>
                        <DetailCard image={product.image}/>
                        <DetailCard image={product.image}/>
                        <DetailCard image={product.image}/>
                    </div>
                </div>
                <div className="rightSide">
                    <p className="title">{product?.name}</p>
                    {/* <p className="desc">{product.description}</p> */}
                    <StarRating totalStars={6} currentRatings={product?.rating}/>
                    <p className='productPrice'>{`$${product?.price}`}</p>

                    <div className="colorOptionContainer">
                        <p className="colorOptionTitle">Choose A Color</p>
                        <div className="colorOptions">
                            {color_options.map((color, index) =>{
                                return(
                                    <DetailColorOption key={index} onClick={colorChangeHandler.bind(this, index)} selected={selectedColor === index} color={color}/>
                                );
                            })}
                        </div>
                    </div>

                    <div className="counterContainer">
                        <div className="counter">
                            <button disabled={numberOfItems < 2} className="decrementBtn" onClick={decrementItems}>
                                <Remove
                                 fontSize='small'/>
                            </button>
                            <p className='numItems'>{numberOfItems}</p>
                            <button className="incrementBtn" onClick={incrementItems}>
                                <Add
                                 fontSize='small'/>
                            </button>
                        </div>
                        <p className='itemsLeft'>Only <span>12 items</span> left<br/>Don't miss it</p>
                    </div>
                    <div className="bottomBtns">
                        <button onClick={buyNowHandler} className="buyNowBtn">Buy Now</button>
                        <button className="addToCartBtn" disabled={isInCart(product)} onClick={cartAddHandler.bind(this, numberOfItems, color_options[selectedColor][2])}>{isInCart(product) ? 'Already In Cart':'Add to Cart'}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail
