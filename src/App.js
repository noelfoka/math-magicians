import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';
import Quote from './routes-component/Quotes';
import Navbar from './routes-component/Navbar';
import Home from './routes-component/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Calculator />} path="/calculator" exact />
        <Route element={<Quote />} path="/quote" exact />
      </Routes>
    </>
  );
}

export default App;
