import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shops from './components/Shops/Shops';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review';
import Inventory from './components/Inventory';
import NotFound from './components/NotFound';
import SingleProduct from './components/SingleProduct';
import Login from './components/Login/Login';
import Shipping from './components/Shipping/Shipping';
import { createContext } from 'react';
import { useState } from 'react';
export const contexUser = createContext()
function App() {
  const [SignInUser, setSignInUser] = useState({})
  return (
    <contexUser.Provider value={[SignInUser, setSignInUser]}>
            <h1>Email: {SignInUser.email}</h1>
            <Router>
                <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Shops></Shops>
              </Route>

              <Route path='/review'>
                <Review></Review>
              </Route>

              <Route path='/inventory'>
                <Inventory></Inventory>
              </Route>

              <Route path='/login'>
                <Login></Login>
              </Route>

              <Route path='/shipping'>
                <Shipping></Shipping>
              </Route>

              <Route path='/product/:key'>
                <SingleProduct></SingleProduct>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>
              </Switch>  
            </Router>
        </contexUser.Provider>
  );
}

export default App;
