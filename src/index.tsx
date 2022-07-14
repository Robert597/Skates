import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StyleContextProvider } from './Context/dataContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyleContextProvider>
    <Router>
    <App />
    </Router>
    </StyleContextProvider>
  </React.StrictMode>
);


