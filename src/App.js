import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';
import Header from './components/header/header';
import HomePage from './pages/home-page/home-page';
import ShopPage from "./pages/shop-page/shop-page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";
import {auth, createUserProfileDocument} from './firebase/firebase';
import {setCurrentUser} from "./redux/user/user-actions";
import {selectCurrentUser} from "./redux/user/user-selectors";
import CheckoutPage from "./pages/checkout-page/checkout-page";
import Error from './components/error/error';

class App extends Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                });
            }

            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={CheckoutPage}/>
                    <Route exact path='/signin'
                           render={() => this.props.currentUser ? (
                               <Redirect to='/'/>
                           ) : (
                               <SignInAndSignUpPage/>
                           )}/>
                    <Route exact path='/error' component={Error}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);