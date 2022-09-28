import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { Login } from './app/Login'
import About from './About'
import Home from './Home';
import Menu from './Menu'
import Where from './Where';
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
            <Route path="/where" element={<Where />} />
            <Route path="/menu" element={<Menu />} />
            {/* <Route path="/categories" element={<Category />} >
                        <Route path=":id" element={<Products />} />
                    </Route> */}
          </Route>
        </Routes>

      </Provider>
    </BrowserRouter >
  </React.StrictMode>

);

