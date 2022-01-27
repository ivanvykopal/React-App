import MainPage from './components/MainPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from './components/DetailPage';
import { ApolloProvider } from '@apollo/client';
import { useState } from 'react';
import { createApolloClient } from './tools/apolloClient'
import React from "react";

const App = () => {
  const [client] = useState(createApolloClient());

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/:index" element={<DetailPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App;