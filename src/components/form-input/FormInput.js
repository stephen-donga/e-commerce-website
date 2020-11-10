import React from 'react'

import './form-input.scss'

function FormInput({handleChange,label, ...otherProps}) {
    return (
        <div className='group'>
            <input 
            className='form-input' 
            onChange={handleChange} />
            {
                label ?
                (<label className={`${otherProps.value.legnth ? 'shrink':''} form-input-label`}>
                     {label}
                </label>) 
                : null
            }
            
        </div>
    )
}

export default FormInput
