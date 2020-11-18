import React from 'react'

import './header.scss'

import Cart from '../cart/Cart';

import CartList from '../cart-list/CartList'

import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firbase.utils'
import {connect} from 'react-redux'

import {createStructuredSelector} from 'reselect';

import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector'

function Header({currentUser,hidden}) {
    return (    
        <div className='header'>
            <Link className='option' to='/'>logo </Link>
            <div className='nav-buttons'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/'>HOME</Link>
                
                {
                    currentUser ?
                    (<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>)
                    :
                    (<Link className='option' to='/sign'>SIGN UP</Link>)
                }
                
                <Cart />
            </div>
            {
                hidden ? null:( <CartList />)
            }
           
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps) (Header);
