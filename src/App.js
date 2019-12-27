import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/home-page/home-page';
import ShopPage from "./pages/shop-page/shop-page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page";
import {auth, createUserProfileDocument} from './firebase/firebase';

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            console.log(userAuth);
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapshot => {
                   this.setState({
                       currentUser: {
                           id: snapshot.id,
                           ...snapshot.data()
                       }
                   })
                });
            }

            this.setState({currentUser: userAuth})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUpPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;