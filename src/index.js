import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root for rendering the app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the app inside the root element
root.render(
  <Provider store={store}> {/* Wrap the app with the Redux store provider */}
    <BrowserRouter> {/* Wrap the app with the BrowserRouter */}
      <App /> {/* Render the App component */}
    </BrowserRouter>
  </Provider>
);

reportWebVitals(); // Perform web vitals reporting
