import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

//Created a collection page that allow us to map out all the components of the collection from the firebase.
//I tried styled components on this component as part of the tutorial but i did not apply to the whole application since
//I think it is too much over head for converting all your styles to javascript although it utilizes some of capabilities
// Building a small application i think there is no required to practice this also I have read an article that by changing yout styles
// To pure javascript will add a little bit performance issues compared to vanilla CSS.
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);