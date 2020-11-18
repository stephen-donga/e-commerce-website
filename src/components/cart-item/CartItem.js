import React from 'react'

import './cart-item.scss'

const CartItem = ({item:{image, name, price, quantity}}) => {
    return (
        <div className='cart-item'>
            <img src={image} alt='item'/>
            <div className='details'>
                <span className='name'>{name}</span>
    <span className='price'>{quantity} x Ugsh: {price}</span>
            </div>
            
        </div>
    )
}

export default CartItem;
