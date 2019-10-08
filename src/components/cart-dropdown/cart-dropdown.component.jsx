import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component'
import '../cart-dropdown/cart-dropdown.styles.scss'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

const CartDropDown = ({cartItems,history,toggleCartHidden}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ?(
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>))
                :(<span className="empty-message">Your Cart is Empty</span>)}
        </div><CustomButton onClick ={()=> {history.push('/checkout');toggleCartHidden()}}>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown));