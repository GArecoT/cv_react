import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import BottomNavbar from './components/BottomNavbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <html data-theme="dracula">
      <Navbar></Navbar>
      <App />
      <BottomNavbar></BottomNavbar>
    </html>
  </React.StrictMode>
);

