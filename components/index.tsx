import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("Tegemea Application Initializing...");

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Critical Error: Root element '#root' not found in the DOM.");
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
