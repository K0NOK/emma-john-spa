import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, price, stock } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt={props.product.alt} />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p>by:{seller}</p>
                <h4>Price:{price}</h4>
                <p>Only {stock} stock -Order left</p>
                <button  onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;