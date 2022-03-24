import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handelAddToCart}) => {
    // const {product, handelAddToCart} = props;
    const {name, img, seller, price, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: ${price}</p>
            <p>Seller: {seller}</p>
            <p><small>Ratings:{ratings} stars</small></p>
            </div>
            <button onClick={() => handelAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Ad To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;