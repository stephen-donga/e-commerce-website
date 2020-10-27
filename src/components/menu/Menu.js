import React from 'react'
import './menu.scss'

import {data} from '../../redux/Data'
import MenuItem from '../menu-item/MenuItem'
import Footer from "../footer/Footer"

function Menu() {
    return (
        <div className='menu'>
         {
           data.sections.map( ({id, title,image})=> (<MenuItem key={id} title={title} image={image} />))
         }  
         <Footer />
        </div>
    )
}

export default Menu
