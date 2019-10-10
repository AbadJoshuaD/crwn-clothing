import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component'
import '../cart-dropdown/cart-dropdown.styles.scss'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

//Declaring the Component Dropdown and passing cartItems,history and toggleCartHidden Props.
const CartDropDown = ({cartItems,history,toggleCartHidden}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {/*This itenary operator decides whether the cart is empty and if it is not it will render the cartItems props on redux store state*/}
            {cartItems.length ?(
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>))
                :(<span className="empty-message">Your Cart is Empty</span>)}
                {/*History is a property that comes in with BrowserRouter react dom router in order to allow you to change routes on given event
                The sequence of the code will first it will redecirect you on the /checkout page then it will trigger an action event
                toggleCartHidden which will pull the state of the cart visibility in redux store and change its state upon toggleCartHidden.*/}
        </div><CustomButton onClick ={()=> {history.push('/checkout');toggleCartHidden()}}>GO TO CHECKOUT</CustomButton>
    </div>
)
//MapStateTopProps allows to retrieve the state of the cartItems using redux selector.
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems
})
//mapDispatchToProps allows to dispatch/send and action event(more like event listner)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown));