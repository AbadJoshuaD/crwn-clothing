import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component"
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { selectCollectionsForPreview } from './redux/shop/shop.selectors'
import { addCollectionAndDocuments } from './firebase/firebase.utils'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentWillMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    /* This is basically implements observable pattern. The thing is we declared an unsubscribe function because
       Firebase is a live database by using this function unsubscribe we will mount at first to get information of the user
       Then we will create a document if the user still doesn't exist in our firebase after
       Basically this whole block of componentWillMount is the Next part in the observable pattern*/
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    /* This function call only states that we need to destroy the subscription we have from the firestore live database
      Since we have already get our user validated/aunthenticated/saved from fire store(if new user)*/
    this.unsubscribeFromAuth();
  }
  render() {
    return (

      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInAndSignUpPage />} />
          <Route exact path='/checkout' component={CheckoutPage}></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
