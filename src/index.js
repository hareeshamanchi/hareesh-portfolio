import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Your custom CSS for global styles
import App from './App';  // The main app component where your routing is defined

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
