import React from 'react';
import '../checkout-item/checkout-item.styles.scss'
import {connect} from 'react-redux'
import {clearItemFromCart,addItem,removeItem} from '../../redux/cart/cart.actions'

// Create a check out components that displays all the cart items on the checkout page
const CheckoutItem = ({cartItem,clearItem,addItem,removeItem}) =>{
    const {imageUrl,name,quantity,price} = cartItem;
    return(
        <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt='item'/>
        </div>
        {/*Added a functionality wherein the user can decrease the items and add quantity to the items in their cart */}
        <span className="name">{name}</span>
        <span className="quantity"><div className="arrow" onClick={() => removeItem(cartItem)}>
            &#10094;</div><span className="value">{quantity}
            </span><div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div></span>
        <span className="price">{price}</span>
        {/*Added a functionality wherein the user can automatically delete items on their cart */}
        <div className="remove-button " onClick={() => clearItem(cartItem)}>&#10005;</div>
    </div>

    )
}

//Dispatching action events such as clear item - add item - and remove item
const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
})

export default connect(null,mapDispatchToProps)(CheckoutItem);