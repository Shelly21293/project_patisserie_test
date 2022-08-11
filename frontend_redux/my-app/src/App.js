import React from 'react';
import './App.css';
import { Login } from './app/Login'
import { Shop } from './app/Shop';
import { Customer } from './app/Customer';
import { Cart } from './app/Cart'



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Login />
        
        <Shop />
        
        <Customer />
        
        {/* GUI only- all methods from customer */}
        <Cart />
      </header>
    </div>
  );
}

export default App;
