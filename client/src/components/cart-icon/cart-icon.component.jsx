import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import '../cart-icon/cart-icon.styles.scss';
//Create a cart icon and spread in the toggleCarrtHidden and itemCount props.
const CartIcon = ({toggleCartHidden,itemCount}) => (
<div className="cart-icon">
        {/*Add an onlick event to manipulate the state of togglecarthidden*/}
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}></ShoppingIcon>
        {/*Select item count props in the redux store.*/}
        <span className="item-count">{itemCount}</span>
    </div>
)

//Get access to the selectCartItemsCount
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})
//Create a dispatch event upon toggle
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);