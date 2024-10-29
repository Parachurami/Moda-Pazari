// import { height } from '@mui/system'
import React, { useContext, useEffect, useRef, useState } from 'react'
import './Navigation.css' 
import { ExpandMoreRounded, PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material'
import {Link} from 'react-router-dom'
import { CartContext } from '../../../context/CartProvider'
import CartItem from '../../cart/CartItem'

function Navigation() {
  const {cart} = useContext(CartContext);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleCart = () =>{
    setCartOpen(prevState => !prevState);
  }

  const closeCart = () => setCartOpen(false);

  useEffect(() =>{
    const handleOutsideClick = (event) =>{
      if(cartRef.current && !cartRef.current.contains(event.target)){
        closeCart();
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () =>{
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  },[cartRef])

  let currentTotal = 0;

  for(let item of cart){
    currentTotal += (item.product.price * item.detail.quantity)
  }

  const [cartTotal, setCartTotal] = useState(0);

  // useEffect(()=>{
  //   setCartTotal(total)
  // },[cart])

  console.log('cart total', cartTotal)

  console.log(cart)
  return (
    <div className='nav-container' style={styles.container}>
      <div className="inner-nav-container">
        <div className="left-nav">
          <p className='logo'>Moda Pazari</p>
        </div>
        <div className="center-nav">
          <div className="dropDownTitle" style={styles.dropdown}>
            <p>Categories</p>
            <ExpandMoreRounded/>
          </div>
          <Link>Deals</Link>
          <Link>What's new</Link>
          <Link>Delivery</Link>
          <div className="nav-search-bar">
            <input placeholder='Search Product' type="text" name="search" id="nav-search" />
            <Search className='search-icon'/>
          </div>
        </div>
        <div className="right-nav">
          <Link className='nav-iconBtn'>
            <PersonOutlineOutlined/>
            <p>Profile</p>
          </Link>
          <button
          style={{
            position:'relative',
            border:'none',
            backgroundColor:'transparent',
            cursor:'pointer'
          }}
          onClick={toggleCart}
           className='nav-iconBtn'>
            {cart.length > 0 && 
              <div
              style={{
                position: 'absolute',
                right:-10,
                top: -9,
                backgroundColor:'#090C9B',
                color:'white',
                height:20,
                width:20,
                borderRadius:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
              }}
              >
                {cart.length}
              </div>}
            <ShoppingCartOutlined/>
            <p>Cart</p>
            {cartOpen && (
        <div className='cartPopup' onClick={(e) => e.stopPropagation()} ref={cartRef} style={styles.popup}>
          <h3 style={{fontWeight:'600', textAlign:'left', marginBottom:20, fontSize:18}}>Checkout Goods({cart.length})</h3>
          {
            cart.map((item, index) =>{
              return(
                <CartItem
                 currentTotal={cartTotal} 
                 key={index} 
                 cartItem={item} 
                 setTotal={setCartTotal}
                 partTotal={parseFloat(currentTotal.toFixed(2))}
                 />
              );
            })
          }
          <hr style={{marginTop:40}} />
          <div 
            style={{
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center',
              marginTop:40
            }}
           className="total">
            <p
            style={{
              fontSize:'1rem',
              fontWeight:'600'
            }}
            >Grand total</p>
            <p>${cartTotal}</p>
          </div>
          <button
          style={{
            backgroundColor:'#090C9B',
            color:'#ffffff',
            width:'100%',
            padding:13,
            marginTop:20,
            border:'none'
          }}
           type="button">CHECKOUT NOW</button>
        </div>
      )}
          </button>
        </div>
      </div>
    </div>
  )
}

const styles = {
    container: {
        width:'100%',
        backgroundColor:'white',
        height:'10%',
    },
    dropdown:{
      display:'flex',
      flexDirection:'row',
      gap:6,
      alignItems:'center',
      cursor:'pointer',
      height:'fit-content'
    },
    popup: {
      width:'fit-content',
      position: 'absolute',
      top: '50px',
      left: '50%',
      transform: 'translateX(-100%)',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: '30px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      zIndex: 1000, // Make sure the popup is above other elements
    },
}

export default Navigation
