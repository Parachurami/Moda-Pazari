import React, { useContext, useEffect, useState } from 'react'
import './cart.css'
import { Checkbox } from '@mui/material'
import { Add, Remove, RemoveCircle } from '@mui/icons-material'
import { CartContext } from '../../context/CartProvider'
function CartItem({cartItem, setTotal, currentTotal, partTotal}) {
  const {removeFromCart, cart} = useContext(CartContext);
  const [numberOfItems, setNumberOfItems] = useState(cartItem.detail.quantity);

  const incrementItems = () =>{
      setNumberOfItems((items) => items+=1);
      console.log(numberOfItems);
  }

  const decrementItems = () =>{
      if(numberOfItems > 1)
      {
          setNumberOfItems((items) => items-=1);
      }
      console.log(numberOfItems)
  }

  const [isChecked, setIsChecked] = useState(true)
  const amount = (parseFloat(cartItem.product.price) * parseFloat(numberOfItems)).toFixed(2);
  const toggleChecked = () =>{
    if(isChecked){
      setTotal(currentTotal - parseFloat(amount));
      setIsChecked(false);
      return
    }
    setTotal(currentTotal + parseFloat(amount));
    setIsChecked(true)
  }


  useEffect(() =>{
    setTotal(partTotal)
  },[])

  console.log('current-total:',currentTotal)

  

  const computeCartTotal = () =>{
    let newTotal = 0;

    for(let item of cart){
      newTotal += (item.product.price * item.detail.quantity)
    }

    setTotal(newTotal.toFixed(2))
  }
  return (
    <div className='cartItemContainer'>
      <div>
        
        <Checkbox style={{color:'#090C9B'}} checked={isChecked} onClick={toggleChecked}/>
        <RemoveCircle onClick={() => {
          removeFromCart(cartItem.id)
          setTotal(currentTotal - parseFloat(amount))
          computeCartTotal()
          }} style={{color:'red'}}/>
        {/* <Delete style={{color:'#090C9B'}}/> */}
      </div>
      <div className='cartItemImage'>
        <img src={cartItem.product.image} alt="" />
      </div>
      <div className="counterDescContainer">
        <p>{cartItem.product.name}</p>
        <div className="counter">
          <button disabled={numberOfItems < 2} className="decrementBtn" onClick={() =>{
            decrementItems();
            setTotal(parseFloat((currentTotal - parseFloat(cartItem.product.price)).toFixed(2)))
            
          }}>
              <Remove
              fontSize='small'/>
          </button>
          <p className='numItems'>{numberOfItems}</p>
          <button className="incrementBtn" onClick={() =>{
            incrementItems();
            setTotal(parseFloat((currentTotal + parseFloat(cartItem.product.price)).toFixed(2)))
          }}>
              <Add
              fontSize='small'/>
          </button>
        </div>
      </div>
      <p style={{marginLeft: 20, fontSize:'1rem', fontWeight:'600'}}>${amount}</p>
    </div>
  )
}

export default CartItem
