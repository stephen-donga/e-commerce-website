import React from 'react'
import './products-preview.scss'
import PreviewItem from '../preview-item/PreviewItem'

const ProductsPreview = ({title, items}) => {
    return (
        <div className='preview-container'>
            <h2>{title.toUpperCase()}</h2>
         
           <div className='preview'>
           {
                items.filter((items,idx)=>idx <4).map((item) =>(
                 <PreviewItem key={item.id} item={item} />
                ))
            }
           </div>
        </div>
    )
}

export default ProductsPreview
