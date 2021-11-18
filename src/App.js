import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import ConverterPage from './ConverterPage/ConverterPage';
import ExchangeRatesPage from './ExchangeRatesPage/ExchangeRatesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/ConverterPage' element={<ConverterPage/>} /> 
          <Route path='/ExchangeRatesPage' element={<ExchangeRatesPage/>} />
          <Route exact path='/' element={<Navigate to='/ConverterPage' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
