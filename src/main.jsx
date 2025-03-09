import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Ensure this import is correct
import './index.css';

/**
 * The entry point of the React application.
 * Renders the App component into the root DOM element.
 *
 * @module main
 */
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);