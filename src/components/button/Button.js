import React from 'react'

import './button.scss'

function Button({children,isGoogleSign, ...OtherProps}) {
    return (
        <button className= {`${isGoogleSign ? 'google-sign':''} button`} {...OtherProps}>
            {
                children
            }
        </button>
    )
}

export default Button
