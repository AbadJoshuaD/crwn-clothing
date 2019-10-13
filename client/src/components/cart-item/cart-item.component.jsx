import React from 'react';
import '../cart-item/cart-item.styles.scss';

//Creating a cart item component that displays all the cart items on the cart icon
const CartItem = ({item:{imageUrl,price,name,quantity}}) =>(
    <div className="cart-item">
        <img src={imageUrl} alt='item'/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x ${price}
            </span>
        </div>
    </div>
);

export default React.memo(CartItem);