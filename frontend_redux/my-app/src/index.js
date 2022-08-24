import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import {Login} from './app/Login'
import About from './About'
const container = document.getElementById('root');
const root = createRoot(container);


root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>

        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/note" element={<Note />} />
                    <Route path="/categories" element={<MyCats />} >
                        <Route path=":id" element={<Products />} />
                    </Route> */}
          </Route>
        </Routes>

      </Provider>
    </BrowserRouter >
  </React.StrictMode>

);

