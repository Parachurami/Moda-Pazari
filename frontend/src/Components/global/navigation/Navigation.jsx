// import { height } from '@mui/system'
import React from 'react'
import './Navigation.css' 
import { ExpandMoreRounded, PersonOutlineOutlined, Search, ShoppingCartOutlined } from '@mui/icons-material'
import {Link} from 'react-router-dom'

function Navigation() {
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
          <Link className='nav-iconBtn'>
            <ShoppingCartOutlined/>
            <p>Cart</p>
          </Link>
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
    }
}
export default Navigation
