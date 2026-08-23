import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';


ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);