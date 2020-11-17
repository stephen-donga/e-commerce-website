import React from 'react'

import './header.scss'

import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firbase.utils'
import {connect} from 'react-redux'

function Header({currentUser}) {
    return (
        <div className='header'>
            <Link className='option' to='/'>logo </Link>
            <div className='nav-buttons'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/'>HOME</Link>
                
                {
                    currentUser ?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/sign'>SIGN UP</Link>
                }
                

            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser :state.user.currentUser
})

export default connect(mapStateToProps) (Header);
