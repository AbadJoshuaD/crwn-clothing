import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { fetchCollectionStart } from './shop/shop.sagas'

//We are now using redux thunk to check if 
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionStart);

export const persistor = persistStore(store);

export default { store, persistStore }