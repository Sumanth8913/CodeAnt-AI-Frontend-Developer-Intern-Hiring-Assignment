import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';  // Make sure to include any custom styles here
import App from './App';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
