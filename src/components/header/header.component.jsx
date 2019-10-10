import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../header/header.styles.scss'
import {ReactComponent as Logo} from '../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CardDropDown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

//Created a header component for the application
const Header = ({currentUser,hidden}) => (
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
            <div className="option" onClick = {() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
        }
            <CartIcon></CartIcon>
            <div>{hidden?null:<CardDropDown></CardDropDown>}</div>
            
        </div>
    
    </div>
)
//Getting access to the props of these following in order to do conditional output on the header component 
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);