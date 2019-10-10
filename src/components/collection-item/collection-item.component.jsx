import React from 'react';
import {connect} from 'react-redux';
import {addItem,toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.styles.scss';


// Creating a collection item wherein it display all the available items on the firestore
const CollectionItem = ({ item,addItem,toggleCartHidden,hidden}) => {
  const {imageUrl,name,price} = item;
  return(
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    {/*Added a toggleCartHidden functionality so that when user add to cart the cart dropdown will open makes site more interactive*/}
    <CustomButton inverted onClick={()=>{addItem(item);if(hidden){toggleCartHidden()}}}>ADD TO CART</CustomButton>
  </div>
)}
//Get the props of cart hidden in order to check if the card is hidden
const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
})
//Dispatch action events such as adding item to the cart and toggle the cart drop down
const mapDispatchToProps = dispatch =>({
  addItem:item => dispatch(addItem(item)),
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps,mapDispatchToProps)(CollectionItem);