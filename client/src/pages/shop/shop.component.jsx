import React,{useEffect,lazy,Suspense} from 'react';
import Spinner from '../../components/spinner/spinner.component'
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchCollectionsStart } from '../../redux/shop/shop.actions';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component'
const CollectionsOverviewContainer = lazy(()=> import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

// Created a shop page class component since the data is coming from firebase we need to store the state of the loading(Spinner);
// If the promise of the firebase data was already been loaded.
const ShopPage =({fetchCollectionsStart,match})=> {

    useEffect(()=>{
    fetchCollectionsStart();
    },[fetchCollectionsStart])

    return (
      <div className='shop-page'>
        <ErrorBoundary>
        <Suspense fallback={<Spinner/>}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
        </Suspense>
        </ErrorBoundary>
      </div>
    );
  }



const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);