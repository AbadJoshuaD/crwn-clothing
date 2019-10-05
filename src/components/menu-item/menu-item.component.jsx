import React from 'react'
import '../menu-item/menu-item.styles.scss'

export const MenuItem = ({title,imageUrl,size}) => (
        <div className={`${size} menu-item`}>
            <div 
            className='background-image' 
            style={{
            backgroundImage:`url(${imageUrl})`
        }}>
              </div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtile">SHOP</span>
            </div>
        </div>
      
)