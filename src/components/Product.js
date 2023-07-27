import React from 'react';
import BuyButton from './templates/buttons/BuyButton';

const Product = ({ product }) => {
  return (
    <div className='product-list"'>
    <div className="product-item" >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <BuyButton></BuyButton>
    </div>
    </div>
  );
};

export default Product;
