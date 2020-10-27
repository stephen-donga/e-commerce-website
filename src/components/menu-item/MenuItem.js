import React from 'react'
import './menu-item.scss'

function MenuItem({title,image}) {
    return (
        <div style={{backgroundImage:`url(${image})`}} className ='menu-item'>
          <div className='content'>
           <h3>{title.toUpperCase()} </h3>
           <span>Shop now</span> 
          </div>
          
        </div>
    )
}

export default MenuItem
