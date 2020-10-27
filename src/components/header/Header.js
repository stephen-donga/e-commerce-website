import React from 'react'

import './header.scss'

import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link className='option' to='/'>logo </Link>
            <div className='nav-buttons'>
                <Link className='option' to='/shop'>shop</Link>
                <Link className='option' to='/'>home</Link>
                <Link className='option' to='/' >not yet</Link>

            </div>
            
        </div>
    )
}

export default Header
