import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import About from './About'

import { Login } from './app/Login'
import { Shop } from './app/Shop';
import { Customer } from './app/Customer';
import { Cart } from './app/Cart'



function App() {
  return (
    <div className="App">
      {/* <!-- Add a background color and large text to the whole page --> */}
      {/* <div class="w3-sand w3-grayscale w3-large">
        <NavBar></NavBar>



        <Header></Header>

        <Outlet></Outlet>
        <Footer></Footer>
        <About></About>
      </div> */}

      <Login />
      <hr />
      <Shop />
      <hr />
      <Customer />
      <hr />

      {/* GUI only- all methods from customer */}
      <Cart />
    </div>
  );
}

export default App;
