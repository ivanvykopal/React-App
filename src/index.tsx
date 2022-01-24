import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from './components/DetailPage';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/detail" element={<DetailPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

