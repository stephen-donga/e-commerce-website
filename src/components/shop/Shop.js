import React,{useState} from 'react'
import './shop.scss'
import {ShopData} from '../../redux/Data'
import ProductsPreview from '../preview/ProductsPreview'

function Shop() {
    const[data, setData] = useState(ShopData)
    return (
        <div className='shop'>
            <h2>Product Collections</h2>
            {
                data.map(({id, ...otherProps}) =>(
                    <ProductsPreview key={ id} {...otherProps} />
                ))
            }
            
        </div>
    )
}

export default Shop
