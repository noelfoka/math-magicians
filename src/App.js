import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';
import Quote from './routes-component/Quotes';
import Navbar from './routes-component/Navbar';
import Home from './routes-component/Home';
import NotMatch from './routes-component/NotMatch';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<Calculator />} path="/calculator" exact />
        <Route element={<Quote />} path="/quote" exact />
        <Route element={<NotMatch />} path="*" exact />
      </Routes>
    </>
  );
}

export default App;
