import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { Login } from './app/Login/Login'
import About from './About'
import Home from './Home';
import Menu from './Menu'
import Cartwindow from './app/Cart_Order/Cartwindow';
import Cart from './app/Cart_Order/Cart';
import Category from './app/Category/Category';
import Product from './app/Product/Product'
import Staff_GUI from './app/Staff_GUI';
import TTest from './app/TTest';

import Product_Staff_GUI from './app/Product/Product_Staff_GUI';
import Category_Staff_GUI from './app/Category/Category_Staff_GUI';


const container = document.getElementById('root');
const root = createRoot(container);


root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>

        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/product" element={<Product />} />
            <Route path="/menu/category" element={<Category />} >
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="/staffGUI" element={<Staff_GUI />} >
              {/* <Route path="/staffGUI/products" element={<Product_Staff_GUI />} /> */}
            </Route>

            <Route path="/staffGUI/delete_update" element={<Category_Staff_GUI />} >
              <Route path=":id" element={<Product_Staff_GUI />} />
            </Route>
            <Route path="/staffGUI/products" element={<Product_Staff_GUI />} />
            {/* <Route path="/staffGUI/categories" element={<Category_Staff_GUI />} /> */}
            <Route path="/staffGUI/customers" element={<Product_Staff_GUI />} />
            
          </Route>
        </Routes>

      </Provider>
    </BrowserRouter >
  </React.StrictMode>

);

