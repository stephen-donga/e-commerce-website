import React from 'react'
import './preview-item.scss'

function PreviewItem({id, name, image, price}) {
    return (
        <div 
        className='container'>
            <div 
             style={{backgroundImage:`url(${image})`}}
             className='image' />
             <div className='label'>
                <h5>{name}</h5>
                <span>Ugsh:{price}</span>
             </div>
        </div>
    )
}

export default PreviewItem
