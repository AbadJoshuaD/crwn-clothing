import React from 'react'
import '../collection-preview/collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

//Created collection preview wherein there are only four items to show on the shop page
const CollectionPreview = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {/*Limiting the display of the items on shop page*/}
            {items.filter((item,idx)=>idx < 4).map((item) =>(<CollectionItem key={item.id} item={item} />))}
        </div>
    </div>
)

export default CollectionPreview;