import React from 'react'
import './preview-item.scss'

import {connect} from 'react-redux'

import {addItem} from '../../redux/cart/cart.actions'

import Button from '../button/Button'

const PreviewItem = ({ item, addItem}) => {

    const {image, name, price} = item
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
             <Button onClick={()=>addItem(item)} inverted >Add to cart</Button>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item)),
})
export default connect(null, mapDispatchToProps)(PreviewItem)
