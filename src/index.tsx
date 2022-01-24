import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

