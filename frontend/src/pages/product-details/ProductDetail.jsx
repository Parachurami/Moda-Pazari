import React from 'react'
import './ProductDetail.css';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
    const location = useLocation();
    const product = location.state;
  return (
    <div>
      <p>{product.name}</p>
    </div>
  )
}

export default ProductDetail
