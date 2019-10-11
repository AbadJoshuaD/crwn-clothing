import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import {Link} from 'react-router-dom'
import '../header/header.styles.scss'
import { ReactComponent as Logo } from '../assets/crown.svg';

//Created a header component for the application
const Header = ({currentUser,hidden,signOutStart}) => (
    <div className="header">
        {/*This part was basically the routing part of the app */}
        <Link to='/'>
        <Logo className="logo"></Logo>
        </Link>
        <div className="options">
        <Link to='/shop' className="option"> SHOP
        </Link> 
        <Link to='/contact' className="option">
        CONTACT
        </Link>
        {
            // This part of the program checks if there is currently a user and then conditionally render links 
            currentUser ?
            <div className="option" onClick = {signOutStart}>SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
        }
            <CartIcon></CartIcon>
            <div>{hidden?null:<CartDropDown></CartDropDown>}</div>
            
        </div>
    
    </div>
)
//Getting access to the props of these following in order to do conditional output on the header component 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
  const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header);