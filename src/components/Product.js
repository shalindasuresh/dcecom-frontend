// components/Product.js

import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='product-list"'>
    <div className="product-item" >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
    </div>
  );
};

export default Product;
