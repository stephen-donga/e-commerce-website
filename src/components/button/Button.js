import React from 'react'

import './button.scss'

function Button({children, ...OtherProps}) {
    return (
        <button className='button' {...OtherProps}>
            {
                children
            }
        </button>
    )
}

export default Button
