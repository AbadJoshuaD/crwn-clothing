import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'




// Created a shop page class component since the data is coming from firebase we need to store the state of the loading(Spinner);
// If the promise of the firebase data was already been loaded.
class ShopPage extends React.Component {

  componentDidMount() {
   const { fetchCollectionsStart } = this.props;
   fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);