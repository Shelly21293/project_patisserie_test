import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'

import { Login } from './app/Login'
// import { Shop } from './app/Shop';
import { Customer } from './app/Customer';
import { Cart } from './app/Cart'



function App() {
  return (
    <div className="App">
      <div style={{backgroundColor:'#fffae6'}}>
        <Header></Header>

        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>

      </div>






      {/* <!-- Add a background color and large text to the whole page --> */}
      {/* <Header></Header>
      <NavBar></NavBar>




      <div className="w3-sand w3-grayscale w3-large">
        <div className="container mt-5">
          {/* <Outlet></Outlet> */}
      {/* <LoginPage></LoginPage>
          <Footer></Footer>
        </div> */}
      {/* // </div> */}

      {/* <Login />
      <hr />
      <Shop />
      <hr />
      <Customer />
      <hr />

      {/* GUI only- all methods from customer */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
