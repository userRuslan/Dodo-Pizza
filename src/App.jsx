import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart, NotFound } from './pages';

import './scss/style.scss'

function App () {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <div className="line mb-35"></div>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
