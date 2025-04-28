import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+
import './index.css'; // Import any CSS
import App from './App'; // Your main App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter (not Router)

// Create a root element for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your app in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
