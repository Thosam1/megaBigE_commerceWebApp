import React from 'react';

import styled from 'styled-components';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

  unsubscribeFromAuth = null; // so we don't have memory leaks when app is closed
  
  componentDidMount(){

    const {setCurrentUser} = this.props; //  destructuring

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // this.setState({ currentUser: user }) // so we know when a user has logged in or a data has changed
    
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          // console.log(this.state) ; // debugging
        });  
      }
      // if userAuth object is null
      setCurrentUser(userAuth); // if user logs out
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth(); // this will close the app
  }

  render() {
    return (
      <div>
        <Header />      
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    )  
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps, // so we have access to map.props.user
  mapDispatchToProps
 ) (App);
