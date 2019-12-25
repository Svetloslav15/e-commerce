import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/header/header';
import HomePage from './pages/home-page/home-page';
import ShopPage from "./pages/shop-page/shop-page";

const App = () => {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
        </Switch>
    </div>
  );
};

export default App;