import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';

import { ReactComponent as Logo } from '../../assets/crown.svg'; // speci

import './header.styles.scss';

const Header = ( {currentUser} ) => ( // deconstructing the user we're passing from App.js
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>  

            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> // if currently signed in
                :
                <Link className='option' to='/signin'> SIGN IN </Link> // if currently signed out
            } 

            <CartIcon />

        </div>
    </div>
);

const mapStateToProps = state => ({ // state is top-level root reducer
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);