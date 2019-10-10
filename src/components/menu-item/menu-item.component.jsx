import React from 'react';
import '../menu-item/menu-item.styles.scss';
import {withRouter} from 'react-router-dom'

//Created a menu item wherein displays the following menu/category available on the app
//Each menu/category also has an onClick event that will route them to that specific category utilizing withRouter
// A higher order function that allows us to tap in to the history props api given by the BrowserRouter(react-router-dom)
const MenuItem = ({title,imageUrl,size,history,linkUrl,match}) => (
        <div className={`${size} menu-item`} onClick = {() => history.push(`${match.url}${linkUrl}`)}>
            <div className ='background-image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }}/>
            <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
        </div>
        </div>

);
export default withRouter(MenuItem);
