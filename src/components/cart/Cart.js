import React from 'react';

import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'

import './cart.scss'

const  Cart = ({toggleCartHidden}) => (
    <div className='cart' onClick={toggleCartHidden}>
        <ShoppingBag  className='shopping-bag'/>
        <span className='count-item'>0</span>
    </div>
) 

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(Cart);
