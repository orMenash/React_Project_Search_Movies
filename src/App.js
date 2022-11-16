import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './component/home';
import VodInput from './component/vodInput'
import Footer from './component/footer'
import { MoreInfo } from './component/moreInfo';
import { Page404 } from './component/page404';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <VodInput />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/info' element={<MoreInfo />} />
        <Route path='/*' element={<Page404 />}>
        </Route></Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
