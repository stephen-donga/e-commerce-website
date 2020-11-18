import React from 'react'

import './button.scss'

function Button({children,isGoogleSign,inverted, ...OtherProps}) {
    return (
        <button className= {`${inverted ? 'inverted' : ''} ${isGoogleSign ? 'google-sign':''} button`} {...OtherProps}>
            {
                children
            }
        </button>
    )
}

export default Button
