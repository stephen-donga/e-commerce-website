import React from 'react';

import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'

import {selectCartItemsCounter} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';

import './cart.scss'

const  Cart = ({toggleCartHidden, items}) => (
    <div className='cart' onClick={toggleCartHidden}>
        <ShoppingBag  className='shopping-bag'/>
        <span className='count-item'>{items}</span>
    </div>
) 

const mapStateToProps =createStructuredSelector({
    items : selectCartItemsCounter
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
