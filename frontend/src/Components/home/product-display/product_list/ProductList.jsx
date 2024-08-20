import React from 'react';
import './ProductList.css'
import ProductCard from '../product_card/ProductCard';
function ProductList({products=[]}) {
  return (
    <div className='product-container'>
      {products.map((product, index) =>{
        return (
          <ProductCard key={index} product={product}/>
        );
      })}
    </div>
  );
}

export default ProductList;
