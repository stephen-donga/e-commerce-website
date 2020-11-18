import React from 'react'

import './checkout.scss'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

const Checkout = () => {
    return (
        <div className='checkout'>
             <div className='header'>
                 <div className='column'>
                     <span>Product</span>
                 </div>
                 <div className='column'>
                     <span>Description</span>
                 </div>
                 <div className='column'>
                     <span>Quantity </span>
                 </div>
                 <div className='column'>
                     <span>Price</span>
                 </div>
                 <div className='column'>
                     <span>Remove</span>
                 </div>
             </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});


export default connect(mapStateToProps)(Checkout);
