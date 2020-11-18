import React from 'react';

import './cart-list.scss';

import {connect} from 'react-redux'

import CartItem from '../cart-item/CartItem'

import Button from  '../button/Button';

import {selectCartItems} from '../../redux/cart/cart.selectors'

const CartList = ({cartItems}) => (
    <div className="cart-list">
        <div className="cart-items">
            {
                cartItems.map(cartItem =><CartItem key={cartItem.id}item={cartItem}/>)
            }
        </div>
        <Button >go to checkout</Button>
</div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps  )(CartList);