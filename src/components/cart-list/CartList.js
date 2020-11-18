import React from 'react';

import './cart-list.scss';

import {connect} from 'react-redux'

import CartItem from '../cart-item/CartItem'

import Button from  '../button/Button';

import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';

import {withRouter} from 'react-router-dom'

const CartList = ({cartItems, history}) => (
    <div className="cart-list">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem =><CartItem key={cartItem.id}item={cartItem}/>)
                : <span className="cart-empty">Your cart is empty !</span>
            }
        </div>
        <Button onClick={()=>history.push('/checkout')}>go to checkout</Button>
</div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems 
});

export default withRouter(connect(mapStateToProps  )(CartList));