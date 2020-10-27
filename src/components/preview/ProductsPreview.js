import React from 'react'
import './products-preview.scss'
import PreviewItem from '../preview-item/PreviewItem'

function ProductsPreview({title, items}) {
    return (
        <div className='preview-container'>
            <h2>{title.toUpperCase()}</h2>
         
           <div className='preview'>
           {
                items.filter((items,idx)=>idx <4).map(({id, image, price, name}) =>(
                 <PreviewItem key={id} name={name} price={price} image={image} />
                ))
            }
           </div>
    
            
        </div>
    )
}

export default ProductsPreview
