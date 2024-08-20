import React from 'react'
import './FilterContainer.css'
import { ExpandMoreRounded, TuneRounded } from '@mui/icons-material'
import { Link } from 'react-router-dom'
function FilterContainer() {
  return (
    <div className='filter-container'>
      <div className="filter-left">
        <div className="filter-box">
            <span>Product Type</span>
            <ExpandMoreRounded/>
        </div>
        <div className="filter-box">
            <span>Price</span>
            <ExpandMoreRounded/>
        </div>
        <div className="filter-box">
            <span>Review</span>
            <ExpandMoreRounded/>
        </div>
        <div className="filter-box">
            <span>Color</span>
            <ExpandMoreRounded/>
        </div>
        <div className="filter-box">
            <span>Material</span>
            <ExpandMoreRounded/>
        </div>
        <div className="filter-box">
            <span>Offer</span>
            <ExpandMoreRounded/>
        </div>
        <Link className="filter-box">
            <span>All Filters</span>
            <TuneRounded/>
        </Link>
      </div>
      <div className="filter-right">
        <div className="filter-box-outlined">
            <span>Sort by</span>
            <ExpandMoreRounded/>
        </div>
      </div>
    </div>
  )
}

export default FilterContainer
